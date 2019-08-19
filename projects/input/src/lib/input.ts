import {
  Component,
  OnChanges,
  AfterContentInit,
  OnDestroy,
  ContentChild,
  Input,
  TemplateRef,
  HostBinding,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { XotbInputElement } from './element';
import { isRequired, InputBoolean, toBoolean } from 'utility';
import { Subscription } from 'rxjs';
import { XotbThemeService } from 'xotb-theme';

@Component({
  selector: 'xotb-input,[xotb-input]',
  templateUrl: './input.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.xotb-form-element]': 'true'
  },
  styleUrls: ['./input.css']
})
export class XotbInput implements OnChanges, AfterContentInit, OnDestroy {
  @ContentChild(XotbInputElement, { static: true }) input: XotbInputElement;

  @isRequired
  @Input()
  label: string | TemplateRef<any>;

  @Input()
  error: string | TemplateRef<any>;

  @Input()
  @InputBoolean()
  stacked: boolean;

  @Input()
  fieldLevelHelpTooltip: string | TemplateRef<any>;

  @HostBinding('class.xotb-has-error')
  get hasError(): boolean {
    return toBoolean(this.error);
  }

  required: boolean;

  _uid: string;

  get errorId() {
    return `error_${this._uid}`;
  }

  private eRequiredSubscription: Subscription;

  constructor(private cd: ChangeDetectorRef, private theme: XotbThemeService) {
    this.theme.toggleLight();
  }

  ngOnChanges() {
    this.input.describedBy = this.error ? this.errorId : null;
  }

  ngAfterContentInit() {
    if (!this.input) {
      throw Error(
        `
        [xotb-edge] Couldn't find an <input> with [xotb] attribute inside XotbInput
        `
      );
    }

    this.eRequiredSubscription = this.input.eRequiredSubject.subscribe(
      required => {
        this.required = required;
        this.cd.detectChanges();
      }
    );

    this._uid = this.input.id;
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.eRequiredSubscription) {
      this.eRequiredSubscription.unsubscribe();
      this.eRequiredSubscription = null;
    }
  }
}
