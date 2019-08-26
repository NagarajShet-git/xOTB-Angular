import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/**
 * Library modules
 */
import { XotbInputModule } from 'projects/input/src/public-api';
import { XotbTooltipsModule } from 'projects/tooltips/src/public-api';
import { XotbCheckboxModule } from 'projects/checkbox/src/public-api';
import { XotbSelectModule } from 'projects/select/src/public-api';
import { XotbRadioGroupModule } from 'projects/radio-group/src/public-api';

/**
 * Examples Component
 */
import { DemoInputComponent } from './examples/input/input.component';
import { DemoTooltipsBasic } from './examples/tooltips/tooltips.component';
import { DemoSelectComponent } from './examples/select/select.component';
import { DemoCheckboxesComponent } from './examples/checkboxes/checkboxes.component';
import { DemoRadioGroupComponent } from './examples/radio-group/radio-group.component';



@NgModule({
  declarations: [
    AppComponent,
    DemoInputComponent,
    DemoTooltipsBasic,
    DemoSelectComponent,
    DemoCheckboxesComponent,
    DemoRadioGroupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    XotbInputModule,
    XotbTooltipsModule,
    XotbSelectModule,
    XotbCheckboxModule,
    XotbRadioGroupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
