import { NgModule } from '@angular/core';
import { XotbButton } from './button';
import { CommonModule } from '@angular/common';
import { XotbIconsModule } from 'ng-xotb/icons';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';
import {
  XotbButtonStateOn,
  XotbButtonStateHover,
  XotbButtonStateOff
} from './button-states';
import { XotbButtonStateful } from './button-stateful';

@NgModule({
  declarations: [
    XotbButton,
    XotbButtonStateOn,
    XotbButtonStateHover,
    XotbButtonStateOff,
    XotbButtonStateful
  ],
  imports: [CommonModule, XotbIconsModule, XotbThemeModule],
  exports: [
    XotbButton,
    XotbButtonStateOn,
    XotbButtonStateHover,
    XotbButtonStateOff,
    XotbButtonStateful
  ]
})
export class XotbButtonsModule {}
