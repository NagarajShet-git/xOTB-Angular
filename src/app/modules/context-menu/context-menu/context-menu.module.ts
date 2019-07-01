import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material';
import { ContextMenuComponent } from './context-menu.component';

@NgModule({
  declarations: [
    ContextMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  exports: [ContextMenuComponent]
})
export class ContextMenuModule { }
