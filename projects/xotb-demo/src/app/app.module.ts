import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/**
 * Library modules
 */
import { XotbInputModule } from '../../../input/src/public-api';
import { XotbTooltipsModule } from '../../../tooltips/src/public-api';
import { XotbCheckboxModule } from '../../../checkbox/src/public-api';
import { XotbSelectModule } from '../../../select/src/public-api';
import { XotbRadioGroupModule } from '../../../radio-group/src/public-api';
import { XotbFileUploadModule } from '../../../file-upload/src/public-api';


/**
 * Examples Component
 */
import { DemoInputComponent } from './examples/input/input.component';
import { DemoTooltipsBasic } from './examples/tooltips/tooltips.component';
import { DemoSelectComponent } from './examples/select/select.component';
import { DemoCheckboxesComponent } from './examples/checkboxes/checkboxes.component';
import { DemoRadioGroupComponent } from './examples/radio-group/radio-group.component';
import { DemoFileUploadComponent } from  './examples/file-upload/file-upload.component';




@NgModule({
  declarations: [
    AppComponent,
    DemoInputComponent,
    DemoTooltipsBasic,
    DemoSelectComponent,
    DemoCheckboxesComponent,
    DemoRadioGroupComponent,
    DemoFileUploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    XotbInputModule,
    XotbTooltipsModule,
    XotbSelectModule,
    XotbCheckboxModule,
    XotbRadioGroupModule,
    XotbFileUploadModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
