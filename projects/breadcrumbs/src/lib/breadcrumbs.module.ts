import { XotbThemeModule } from 'ng-xotb/xotb-theme';
import { NgModule } from '@angular/core';
import { XotbBreadcrumbs } from './breadcrumbs.';
import { CommonModule } from '@angular/common';
import { XotbBreadcrumb } from './breadcrumb';

const XOTB_BREADCRUMB_DIRECTIVES = [XotbBreadcrumbs, XotbBreadcrumb];

@NgModule({
  declarations: [XOTB_BREADCRUMB_DIRECTIVES],
  imports: [CommonModule, XotbThemeModule],
  exports: [XOTB_BREADCRUMB_DIRECTIVES]
})
export class XotbBreadcrumbsModule {}
