import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagComponent } from './angular-pagination.component';

@NgModule({
  declarations: [
    PagComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    PagComponent,
    PaginationComponent
  ]
})
export class Pagination{}
