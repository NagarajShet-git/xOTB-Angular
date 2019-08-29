import { NgModule } from '@angular/core';

import { FeatherModule } from 'angular-feather';
import * as icons from 'angular-feather/icons';
import { XotbIcon } from './icon';
import { CommonModule } from '@angular/common';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

@NgModule({
  declarations: [XotbIcon],
  imports: [FeatherModule.pick({ ...icons }), CommonModule, XotbThemeModule],
  exports: [FeatherModule, XotbIcon]
})
export class XotbIconsModule {}
