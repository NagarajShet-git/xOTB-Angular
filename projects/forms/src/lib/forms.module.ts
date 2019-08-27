import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbTooltipsModule } from 'ng-xotb/tooltips';
import { XotbIconsModule } from 'ng-xotb/icons';

import { XotbFormLabel } from './components/xotb-form-label';
import { XotbFormHelp } from './components/xotb-help';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

const COMPONENTS = [XotbFormLabel, XotbFormHelp];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    CommonModule,
    XotbInternalOutletModule,
    XotbTooltipsModule,
    XotbIconsModule,
    XotbThemeModule
  ],
  exports: [COMPONENTS]
})
export class XotbFormsModule {}
