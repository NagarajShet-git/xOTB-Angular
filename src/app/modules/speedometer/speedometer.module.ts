import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SpeedoMeterComponent } from './speedo-meter.component';
import { DemoMaterialModule } from '../../demo.material.module';

@NgModule({
  declarations: [
     SpeedoMeterComponent,
    ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DemoMaterialModule,
  ],
  exports:[
     SpeedoMeterComponent
  ]
})
export class Speedometer { }
