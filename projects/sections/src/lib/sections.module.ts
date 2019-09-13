import { XotbIconsModule } from 'ng-xotb/icons';
import { NgModule } from '@angular/core';
import { XotbSections } from './sections';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [XotbSections],
  imports: [CommonModule, XotbIconsModule],
  exports: [XotbSections]
})
export class XotbSectionsModule {}
