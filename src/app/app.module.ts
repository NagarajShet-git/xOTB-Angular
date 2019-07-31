import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalWindow } from './modules/modal-window/modal-window.module';
import { ImageSlider } from './modules/image-slider/image-slider.module';
import { AccordionGroup } from './modules/accordion-group/accordion-group.module';
import { Speedometer } from './modules/speedometer/speedometer.module';
import { DynamicFormCreation } from './modules/angular-dynamic-form-creation/angular-dynamic-form-creation.module';
import { Pagination } from './modules/angular-pagination/angular-pagination.module';
import { DynamicFormCreationFromJSON } from './modules/dynamic-ng-form-creation-from-json/dynamic-ng-form-creation-from-json.module';
import { ContextMenu } from './modules/context-menu/context-menu.module';
import { IndeterminateTreeStructure } from './modules/indeterminate-tree-structure/indeterminate-tree-structure.module';
import { MultiSelect } from './modules/multi-select-value-exclusion/multi-select-value-exclusion.module';

import { AppComponent, TempComp } from './app.component';
@NgModule({
  declarations: [AppComponent, TempComp],
  imports: [
    BrowserModule,
    ModalWindow,
    ImageSlider,
    AccordionGroup,
    Speedometer,
    DynamicFormCreation,
    Pagination,
    DynamicFormCreationFromJSON,
    ContextMenu,
    IndeterminateTreeStructure,
    MultiSelect
  ],
  providers: [],
  entryComponents: [TempComp],
  bootstrap: [AppComponent]
})
export class AppModule {}
