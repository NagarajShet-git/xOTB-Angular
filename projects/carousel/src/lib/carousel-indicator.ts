import {
  Directive,
  HostBinding,
  Input,
  ElementRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { uniqueId, InputBoolean } from 'ng-xotb/utility';
import { XotbCarouselImage } from './carousel-image';

@Directive({
  selector: '[xotbCarouselIndicator]'
})
export class XotbCarouselIndicator implements OnChanges {
  @HostBinding('class.xotb-is-active')
  @HostBinding('attr.aria-selected')
  @Input()
  @InputBoolean()
  readonly isActive;

  @HostBinding('attr.tabindex')
  get tabindex() {
    return this.isActive ? 0 : -1;
  }

  @Input() readonly images: XotbCarouselImage;

  @HostBinding('attr.id')
  uid = uniqueId('carousel-indicator');

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    this.images.active = this.isActive;

    if (changes.images) {
      this.images.labelledby = this.uid;
    }
  }

  focus() {
    this.el.nativeElement.focus();
  }
}
