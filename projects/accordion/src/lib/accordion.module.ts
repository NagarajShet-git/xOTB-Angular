import { NgModule } from '@angular/core';
import { XotbAccordion } from './accordion';
import { CommonModule } from '@angular/common';
import { XotbIconsModule } from 'ng-xotb/icons';
import { XotbInternalOutletModule } from 'ng-xotb/utility';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';
import { XotbAccordionItem } from './accordion-item';
import { XotbAccordionSection } from './accordion-section';

@NgModule({
  declarations: [XotbAccordion, XotbAccordionItem, XotbAccordionSection],
  imports: [
    CommonModule,
    XotbIconsModule,
    XotbInternalOutletModule,
    XotbThemeModule
  ],
  exports: [XotbAccordion, XotbAccordionItem, XotbAccordionSection]
})
export class XotbAccordionModule {}
