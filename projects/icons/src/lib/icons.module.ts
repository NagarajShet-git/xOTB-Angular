import { NgModule } from '@angular/core';
import { XotbIcon } from './icon';
import { CommonModule } from '@angular/common';
import { XotbIconSvg } from './svg';

@NgModule({
  declarations: [XotbIcon, XotbIconSvg],
  imports: [CommonModule],
  exports: [XotbIcon, XotbIconSvg]
})
export class XotbIconsModule {}
