import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';
import { VBox } from './vbox';
import { HBox } from './hbox';

@NgModule({
  declarations: [VBox, HBox],
  imports: [CommonModule, XotbThemeModule],
  exports: [VBox, HBox]
})
export class XotbBoxModule {}
