import {
  Input,
  Output,
  ViewChild,
  ElementRef,
  AfterContentChecked,
  Component,
  EventEmitter,
  HostBinding,
  OnInit,
  Renderer2,
  ViewEncapsulation
} from '@angular/core';
import {
  TreeNode
} from './../indeterminate-tree-structure.component';

@Component({
  selector: 'app-tree-node',
  styleUrls: ['./tree-node.component.less'],
  templateUrl: './tree-node.component.html',
  encapsulation: ViewEncapsulation.Emulated
})

export class TreeNodeComponent implements AfterContentChecked, OnInit {
  isVisible:boolean;  
  @Input() getColorCode: string;
  @Input() image1: string;
  @Input() image2: string; 
  @Input() node: TreeNode;
  @Input() selectedNode: TreeNode | null;
  @Output() selectEvents = new EventEmitter();
  @ViewChild('checkbox') checkbox: ElementRef;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  firstLevelTotal = 0;
  firstLevelChecked = 0;
  secondLevelTotal = 0;
  secondLevelChecked = 0;
  thirdLevelTotal = 0;
  thirdLevelChecked = 0;

  @HostBinding('class.selected')
  get select() {
      if (this.node === this.selectedNode) {
          return (this.node === this.selectedNode);
      }
  }

  ngOnInit() {
    this.isVisible = false;
  }
  toggleChildren(node: any) {
    this.isVisible = !node.visible;
    node.visible = !node.visible;
  }


  ngAfterContentChecked() {
      this.checkChild(this.node);
  }

  // If parent is selected

  checkParent(node, event) {
      const parentChecked = event.target.checked;
      node.children.forEach((child, key) => {
          child.checked = parentChecked;
          if (child.children !== undefined) {
              child.children.forEach((child1, key1) => {
                  child1.checked = parentChecked;
                  if (child1.children !== undefined) {
                      child1.children.forEach((child2, key2) => {
                          child2.checked = parentChecked;
                          if (child2.children !== undefined) {
                              child2.children.forEach((child3, key3) => {
                                  child3.checked = parentChecked;
                              });
                          }
                      });
                  }
              });
          }
      });
  }
  // If child is selected
  checkChild(node) {
      node.children.forEach((child, key2) => {
          this.firstLevelTotal++;
          if (child.checked === true) {
              this.firstLevelChecked++;
          }
          if (child.children !== undefined) {
              child.children.forEach((Child1, key3) => {
                  this.secondLevelTotal++;
                  if (Child1.checked === true) {
                      this.secondLevelChecked++;
                  }
                  if (Child1.children !== undefined) {
                      child.children.forEach((Child2, key4) => {
                          this.thirdLevelTotal++;
                          if (Child1.checked === true) {
                              this.thirdLevelChecked++;
                          }

                      });
                  }

              });
          }
          /*
          firstLevelTotal  =  No.of children in first level
          firstLevelChecked  =  no.of children checked in first level

          */
          if (this.firstLevelChecked === 0 && this.secondLevelChecked === 0 && this.thirdLevelChecked === 0) {
              this.checkbox.nativeElement.indeterminate = false;
              node.checked = false;
          } else if (this.firstLevelTotal === this.firstLevelChecked && this.secondLevelTotal === this.secondLevelChecked && this.thirdLevelTotal === this.thirdLevelChecked) {
              this.checkbox.nativeElement.indeterminate = false;
              node.checked = true;
          } else if (this.firstLevelChecked <= this.firstLevelTotal &&
              this.secondLevelChecked <= this.secondLevelTotal && this.thirdLevelChecked <= this.thirdLevelTotal) {
              this.checkbox.nativeElement.indeterminate = true;
              node.checked = false;
          }
      });

      this.firstLevelTotal = 0;
      this.firstLevelChecked = 0;
      this.secondLevelTotal = 0;
      this.secondLevelChecked = 0;
      this.thirdLevelTotal = 0;
      this.thirdLevelChecked = 0;

  }

}