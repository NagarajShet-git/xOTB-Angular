import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { XotbFileUpload } from './file-upload';
import { XotbIconsModule } from 'ng-xotb/icons';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';



@NgModule({
  declarations: [XotbFileUpload],
  imports: [CommonModule,
     XotbIconsModule,
     XotbInternalOutletModule,
     XotbThemeModule
  ],
  exports: [XotbFileUpload]
})
export class XotbFileUploadModule { }
