import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbFormsModule } from 'ng-xotb/forms';
import { XotbTextarea } from './textarea/textarea';
import { XotbTextareaInput } from './input/input';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

@NgModule({
  declarations: [XotbTextarea, XotbTextareaInput],
  imports: [CommonModule, XotbFormsModule, XotbThemeModule],
  exports: [XotbTextarea, XotbTextareaInput]
})
export class XotbTextareaModule {}
