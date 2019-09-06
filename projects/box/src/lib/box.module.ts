import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';
import { XotbVBox } from './vbox';
import { XotbHBox } from './hbox';
import { XotbCard } from './card';

@NgModule({
  declarations: [XotbVBox, XotbHBox, XotbCard],
  imports: [CommonModule, XotbThemeModule],
  exports: [XotbVBox, XotbHBox, XotbCard]
})
export class XotbBoxModule {}
