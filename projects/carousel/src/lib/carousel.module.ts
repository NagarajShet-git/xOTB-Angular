import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';
import { XotbIconsModule } from 'ng-xotb/icons';

import { XotbCarousel } from './carousel';
import { XotbCarouselImage } from './carousel-image';
import { XotbCarouselIndicator } from './carousel-indicator';

const DIRECTIVES = [XotbCarousel, XotbCarouselImage];

@NgModule({
  declarations: [...DIRECTIVES, XotbCarouselIndicator],
  imports: [
    CommonModule,
    XotbIconsModule,
    XotbInternalOutletModule,
    XotbThemeModule
  ],
  exports: DIRECTIVES
})
export class XotbCarouselModule {}
