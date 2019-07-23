import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AccordionGroupComponent } from './components/accordion-group.component';
import { AccordionComponent } from './components/accordion.component';

@NgModule({
  declarations: [AccordionGroupComponent, AccordionComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [AccordionGroupComponent, AccordionComponent]
})
export class AccordionGroup {}
