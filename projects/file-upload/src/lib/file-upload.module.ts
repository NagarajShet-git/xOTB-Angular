import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { XotbFileUpload } from './file-upload';

import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';
import { XotbIconsModule } from 'ng-xotb/icons';

@NgModule({
  declarations: [XotbFileUpload],
  imports: [
    CommonModule,
    XotbIconsModule,
    XotbInternalOutletModule,
    XotbThemeModule
  ],
  exports: [XotbFileUpload]
})
export class XotbFileUploadModule { }
