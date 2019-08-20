import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { XotbInternalOutletModule } from 'ng-xotb/utility';

import { XotbTooltipTrigger } from './tooltip-trigger';
import { XotbTooltip } from './tooltip';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

@NgModule({
  declarations: [XotbTooltip, XotbTooltipTrigger],
  imports: [
    CommonModule,
    OverlayModule,
    A11yModule,
    XotbInternalOutletModule,
    XotbThemeModule
  ],
  exports: [XotbTooltipTrigger],
  entryComponents: [XotbTooltip]
})
export class XotbTooltipsModule {}
