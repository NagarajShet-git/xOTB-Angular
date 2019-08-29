import { NgModule } from '@angular/core';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { CommonModule } from '@angular/common';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';
import { OverlayModule } from '@angular/cdk/overlay';
import { A11yModule } from '@angular/cdk/a11y';
import { XotbIconsModule } from 'ng-xotb/icons';
import { XotbPopoverTrigger } from './trigger';
import { XotbPopovers } from './popovers';

const XOTB_POPOVER_DIRECTIVES = [
  XotbPopovers,
  XotbPopoverTrigger,
];

@NgModule({
  declarations: [XOTB_POPOVER_DIRECTIVES],
  exports: [XOTB_POPOVER_DIRECTIVES],
  imports: [
    CommonModule,
    OverlayModule,
    A11yModule,
    XotbInternalOutletModule,
    XotbIconsModule,
    XotbThemeModule
  ],
  entryComponents: [XotbPopovers],
})
export class XotbPopoversModule { }
