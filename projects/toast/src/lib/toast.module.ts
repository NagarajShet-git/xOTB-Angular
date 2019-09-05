import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XotbToast } from './toast';
import { XotbToastClose } from './toast-close';
import { XotbIconsModule } from 'ng-xotb/icons';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

const TOAST_DIRECTIVES = [XotbToast, XotbToastClose];

@NgModule({
  declarations: [TOAST_DIRECTIVES],
  exports: [TOAST_DIRECTIVES],
  imports: [CommonModule, XotbIconsModule, XotbThemeModule]
})
export class XotbToastModule {}
