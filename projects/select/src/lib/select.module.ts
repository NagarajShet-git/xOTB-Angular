import { NgModule } from '@angular/core';
import { XotbFormsModule } from 'ng-xotb/forms';
import { CommonModule } from '@angular/common';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbSelect } from './select';
import { XotbSelectInput } from './select-input';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

@NgModule({
  declarations: [XotbSelect, XotbSelectInput],
  imports: [
    CommonModule,
    XotbFormsModule,
    XotbInternalOutletModule,
    XotbThemeModule
  ],
  exports: [XotbSelect, XotbSelectInput]
})
export class XotbSelectModule {}
