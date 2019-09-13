import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbIconsModule } from 'ng-xotb/icons';
import { XotbRating } from './rating';
import { XotbRatingIconTemplate } from './icons';

@NgModule({
  declarations: [XotbRating, XotbRatingIconTemplate],
  imports: [CommonModule, XotbIconsModule],
  exports: [XotbRating, XotbRatingIconTemplate]
})
export class XotbRatingsModule {}
