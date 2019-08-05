import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormGeneratorComponent } from './form-generator.component';
import { DemoMaterialModule } from '../../demo.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
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
    FormGeneratorComponent
  ]
})

export class DynamicFormCreationFromJSON { }
