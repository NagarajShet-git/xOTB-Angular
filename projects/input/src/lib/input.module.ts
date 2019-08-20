import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbFormsModule } from 'ng-xotb/forms';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbTooltipsModule } from 'ng-xotb/tooltips';
import { XotbInputElement } from './element';
import { XotbInput } from './input';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

const DECLARATIONS = [XotbInput, XotbInputElement];

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    XotbFormsModule,
    XotbTooltipsModule,
    XotbInternalOutletModule,
    XotbThemeModule
  ],
  exports: DECLARATIONS
})
export class XotbInputModule {}
