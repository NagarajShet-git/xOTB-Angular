import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbIconsModule } from 'ng-xotb/icons';
import { XotbRating } from './rating';
import { XotbRatingIconTemplate } from './icons';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

@NgModule({
  declarations: [XotbRating, XotbRatingIconTemplate],
  imports: [CommonModule, XotbIconsModule, XotbThemeModule],
  exports: [XotbRating, XotbRatingIconTemplate]
})
export class XotbRatingsModule {}
