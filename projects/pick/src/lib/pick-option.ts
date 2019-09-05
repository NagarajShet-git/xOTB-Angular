import {
  Directive,
  Input,
  HostListener,
  ElementRef,
  Renderer2,
  OnInit,
  OnDestroy
} from '@angular/core';
import { Subscription } from 'rxjs';
import { XotbPick } from './pick';

@Directive({
  selector: '[xotbPickOption]',
  exportAs: 'xotbPickOption',
  host: {
    role: 'button'
  }
})
export class XotbPickOption implements OnInit, OnDestroy {
  // Use a getter to prevent direct altering
  get active() {
    return this._active;
  }

  @Input('xotbPickOption') set setValue(value: any) {
    this._value = value;
  }

  @Input() xotbPickActiveClass: string;

  private _value: any;
  private _active = false;
  private _subscription: Subscription;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private xotbPick: XotbPick
  ) {}

  @HostListener('click')
  @HostListener('keydown.Space', ['$event'])
  @HostListener('keydown.Enter', ['$event'])
  pick(evt?: Event) {
    if (evt) {
      evt.preventDefault();
    }
    this.xotbPick.selectOption(this._value);
  }

  ngOnInit() {
    this._subscription = this.xotbPick.values.subscribe(value => {
      this._active = this._isActive(value);

      const activeClass =
        this.xotbPickActiveClass || this.xotbPick.xotbPickActiveClass;
      if (activeClass) {
        if (this.active) {
          this.renderer.addClass(this.element.nativeElement, activeClass);
        } else {
          this.renderer.removeClass(this.element.nativeElement, activeClass);
        }
      }
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
    this.xotbPick.optionRemoved(this._value);
  }

  private _isActive(value: any) {
    if (this.xotbPick.isMultiple) {
      if (!value) {
        return false;
      }
      return Array.isArray(value)
        ? value.indexOf(this._value) > -1
        : !!value[this._value];
    } else {
      return this._value === value;
    }
  }
}
