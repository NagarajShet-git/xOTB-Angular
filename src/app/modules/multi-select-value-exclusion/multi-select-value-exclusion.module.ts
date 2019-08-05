import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcludeSelectedValuePipe } from './exclude-selected-value.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectValueExclusion } from './multi-select-value-exclusion.component';
import { DemoMaterialModule } from '../../../app/demo.material.module';
import {IDropDownOptions, ISelectorOptions} from './i-drop-down-options';

@NgModule({
  declarations: [
    MultiSelectValueExclusion,
    ExcludeSelectedValuePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  exports:[MultiSelectValueExclusion,
    ExcludeSelectedValuePipe
  ],
})
export class MultiSelect { }
