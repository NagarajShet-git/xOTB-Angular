import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XotbPick } from './pick';
import { XotbPickOption } from './pick-option';

const XOTB_PICK_DIRECTIVES = [XotbPick, XotbPickOption];

@NgModule({
  declarations: [XOTB_PICK_DIRECTIVES],
  exports: [XOTB_PICK_DIRECTIVES],
  imports: [CommonModule]
})
export class XotbPickModule {}
