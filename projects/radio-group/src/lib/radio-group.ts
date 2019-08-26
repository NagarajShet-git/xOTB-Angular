import { Component, Input, ChangeDetectionStrategy, TemplateRef, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { isRequired, toBoolean, InputBoolean, uniqueId } from 'ng-xotb/utility';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'xotb-radio-group,[xotb-radio-group]',
    template: `
  <xotb-styled-component>
  <legend class="xotb-form-element__legend xotb-form-element__label"><abbr class="xotb-required" *ngIf="required" title="required">*</abbr><span [xotbInternalOutlet]="label"></span></legend>
  <div class="xotb-form-element__control">
      <div class="xotb-radio_button-group" *ngIf="type === 'button'; else contentTpl">
          <ng-container *ngTemplateOutlet="contentTpl"></ng-container>
      </div>
  </div>
  <div class="xotb-form-element__help" *ngIf="error" [id]="errorId">{{error}}</div>
  <ng-template #contentTpl="#contentTpl">
      <ng-content></ng-content>
  </ng-template>
  </xotb-styled-component>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host:{
    '[class.xotb-form-element]': 'true',
  },
    styles: []
})
export class XotbRadioGroup  implements OnChanges  {

    @isRequired
  @Input() label: string | TemplateRef<any>;

  @Input() error: string;

  @HostBinding('class.xotb-has-error')
  get hasError(): boolean {
    return toBoolean(this.error);
  }

  @Input() @InputBoolean() required: boolean;

  get errorId() {
    return `error_${this.uid}`;
  }

  @Input() type: 'list' | 'button' = 'list';

  uid = uniqueId('radio-group');

  type$ = new BehaviorSubject<'list' | 'button'>(this.type);

  error$ = new BehaviorSubject<string | null>(this.error);

  ngOnChanges(changes: SimpleChanges) {
    if (changes.type) {
      this.type$.next(this.type);
    }
    if (changes.error) {
      this.error$.next(this.hasError ? this.errorId : null);
    }
  }

}
