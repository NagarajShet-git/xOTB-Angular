import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/**
 * Library modules
 */
// import { XotbInputModule } from 'projects/input/src/public-api';
// import { XotbTooltipsModule } from 'projects/tooltips/src/public-api';

import { XotbInputModule } from 'ng-xotb/input';
import { XotbTooltipsModule } from 'ng-xotb/tooltips';

/**
 * Examples Component
 */
import { DemoInputComponent } from './examples/input/input.component';
import { DemoTooltipsBasic } from './examples/tooltips/tooltips.component';

@NgModule({
  declarations: [AppComponent, DemoInputComponent, DemoTooltipsBasic],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    XotbInputModule,
    XotbTooltipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
