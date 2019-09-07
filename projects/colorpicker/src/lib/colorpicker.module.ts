import { NgModule } from '@angular/core';
import { XotbColorpicker } from './colorpicker';
import { CommonModule } from '@angular/common';

import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';
import { XotbIconsModule } from 'ng-xotb/icons';
import { XotbFormsModule } from 'ng-xotb/forms';
import { XotbPopoversModule } from 'ng-xotb/popovers';
import { XotbTabsModule } from 'ng-xotb/tabs';

import { XotbColorpickerSwatch } from './swatch/colorpicker-swatch';
import { XotbColorpickerCustom } from './custom/colorpicker-custom';
import { XotbColorpickerRange } from './custom/range/colorpicker-range';
import { XotbColorpickerInputs } from './custom/inputs/colorpicker-inputs';
import { XotbColorpickerSwatches } from './swatches/colorpicker-swatches';
import { XotbColorpickerSwatchTrigger } from './swatches/trigger';

const DIRECTIVES = [XotbColorpicker];

@NgModule({
  declarations: [
    ...DIRECTIVES,
    XotbColorpickerSwatch,
    XotbColorpickerCustom,
    XotbColorpickerRange,
    XotbColorpickerInputs,
    XotbColorpickerSwatches,
    XotbColorpickerSwatchTrigger
  ],
  imports: [
    CommonModule,
    XotbIconsModule,
    XotbTabsModule,
    XotbPopoversModule,
    XotbFormsModule,
    XotbInternalOutletModule,
    XotbThemeModule
  ],
  exports: DIRECTIVES
})
export class XotbColorpickerModule {}
