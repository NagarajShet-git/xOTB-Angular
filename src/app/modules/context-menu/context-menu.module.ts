import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { QuickDatePickerModule } from './quick-date-picker/quick-date-picker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuModule } from './context-menu/context-menu.module';
import { MenuComponent } from './c-menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  providers: [DatePipe],

  imports: [
    CommonModule,
    BrowserModule, QuickDatePickerModule,
    ContextMenuModule,
    BrowserAnimationsModule
  ],
  exports:[
    MenuComponent
  ]
})
export class ContextMenu { }
