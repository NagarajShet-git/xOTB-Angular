import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponentxOTB } from './components/modal/modal.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { ThirdComponentComponent } from './components/third-component/third-component.component';
import { ModalComponent } from './modal-window.component';
import { DemoMaterialModule } from '../../demo.material.module';

@NgModule({
  declarations: [
    ModalComponent,
    ModalComponentxOTB,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent],
  imports: [
    CommonModule,
    DemoMaterialModule
  ],
  exports:[
    ModalComponent,
    ModalComponentxOTB,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent
  ]
})
export class ModalWindow { }
