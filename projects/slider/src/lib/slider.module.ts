import { NgModule } from '@angular/core';
import { XotbSlider } from './slider';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { CommonModule } from '@angular/common';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';



@NgModule({
  declarations: [XotbSlider],
  imports: [CommonModule, XotbInternalOutletModule,
    XotbThemeModule],
  exports: [XotbSlider]
})
export class XotbSliderModule { }
