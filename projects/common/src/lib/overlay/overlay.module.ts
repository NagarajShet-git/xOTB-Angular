import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XotbOverlaynglOverlayScrolledOutsideViewDirective } from './overlay-outside';

@NgModule({
  declarations: [XotbOverlaynglOverlayScrolledOutsideViewDirective],
  exports: [XotbOverlaynglOverlayScrolledOutsideViewDirective],
  imports: [CommonModule]
})
export class XotbOverlayModule {}
