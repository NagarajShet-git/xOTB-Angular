import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbCheckbox } from './checkbox/checkbox';
import { XotbCheckboxInput } from './input/input';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

@NgModule({
  declarations: [XotbCheckbox, XotbCheckboxInput],
  imports: [CommonModule, XotbInternalOutletModule, XotbThemeModule],
  exports: [XotbCheckbox, XotbCheckboxInput]
})
export class XotbCheckboxModule {}
