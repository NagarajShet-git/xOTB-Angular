import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbFormsModule } from 'forms';
import { XotbInternalOutletModule } from 'utility';
import { XotbTooltipsModule } from 'tooltips';
import { XotbInputElement } from './element';
import { XotbInput } from './input';

const DECLARATIONS = [XotbInput, XotbInputElement];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    XotbFormsModule,
    XotbTooltipsModule,
    XotbInternalOutletModule
  ],
  exports: DECLARATIONS
})
export class XotbInputModule {}
