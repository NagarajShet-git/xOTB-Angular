import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XotbButtonIcon } from './button-icon';
import { XotbButtonIconStateful } from './button-icon-stateful';
import { XotbIconsModule } from 'ng-xotb/icons';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

@NgModule({
  declarations: [XotbButtonIcon, XotbButtonIconStateful],
  exports: [XotbButtonIcon, XotbButtonIconStateful],
  imports: [CommonModule, XotbIconsModule, XotbThemeModule]
})
export class XotbButtonIconsModule {}
