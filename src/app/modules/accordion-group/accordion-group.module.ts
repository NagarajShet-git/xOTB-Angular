import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionGroupComponent } from './components/accordion/accordion-group.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionGComponent } from './accordion-g.component';
import { DemoMaterialModule } from '../../demo.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AccordionGComponent,
    AccordionGroupComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule
  ],
  exports:[
    AccordionGComponent,
    AccordionGroupComponent,
    AccordionComponent
  ]
})
export class AccordionGroup { }
