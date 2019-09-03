import { NgModule } from '@angular/core';
import { XotbModal } from './modals';
import { XotbThemeModule } from 'ng-xotb/xotb-theme';

@NgModule({
  declarations: [XotbModal],
  imports: [XotbThemeModule],
  exports: [XotbModal]
})
export class XotbModalsModule {}
