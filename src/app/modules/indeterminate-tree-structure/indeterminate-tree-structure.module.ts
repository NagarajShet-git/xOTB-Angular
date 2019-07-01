import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IndetreeComponent } from './indeterminate-tree-structure.component';

@NgModule({
  declarations: [
    IndetreeComponent,
    TreeNodeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  exports:[
    IndetreeComponent,
    TreeNodeComponent
  ]
})
export class IndeterminateTreeStructure { }
