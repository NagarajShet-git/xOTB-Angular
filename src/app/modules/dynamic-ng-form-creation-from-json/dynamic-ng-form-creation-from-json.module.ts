import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormGeneratorComponent } from './form-generator/form-generator.component';
import { DynamicNgFormCrationFromJsonComponent } from './dynamic-ng-form-creation-from-json.component';
import { DemoMaterialModule } from '../../demo.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DynamicNgFormCrationFromJsonComponent,
    FormGeneratorComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DemoMaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports:[
    DynamicNgFormCrationFromJsonComponent,
    FormGeneratorComponent
  ]
})

export class DynamicFormCreationFromJSON { }
