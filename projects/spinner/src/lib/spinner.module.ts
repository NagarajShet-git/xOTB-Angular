import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XotbSpinner } from './spinner';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

@NgModule({
  declarations: [XotbSpinner],
  imports: [CommonModule, XotbThemeModule],
  exports: [XotbSpinner]
})
export class XotbSpinnerModule {}
