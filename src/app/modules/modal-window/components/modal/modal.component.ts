import { Component, OnInit, Inject, Input, ViewEncapsulation} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { IModalOptions } from '../../i-modal-window-options';

/** @dynamic */
@Component({
  selector: 'app-modal-xOTB',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ModalComponentxOTB implements OnInit {

  @Input() current;

  @Input() previous;

  @Input() buttonGroup:any;

  @Input() modalOptions:IModalOptions;

  public visible = false;
  public visibleAnimate = false;
  public modalWindowOptions:IModalOptions;

  constructor(@Inject(DOCUMENT) private document: Document) { }
  
  ngOnInit() {
    console.log("parent modal",this.buttonGroup);
    this.modalWindowOptions = this.modalOptions;
  }

  public show(): void {
    let previousbuttons;
    this.visible = true;
    setTimeout(() => {
      this.visibleAnimate = true;
    }, 100);
    if (this.previous) {
      previousbuttons = this.document.body.querySelector('#' + this.previous + ' .' + this.buttonGroup).getElementsByTagName('button');
      for (const button of previousbuttons) {
        button.disabled = true;
      }
     }
  }

  public hide(): void {
    let previousbuttons;
    this.visibleAnimate = false;
    setTimeout(() => {
      this.visible = false;
    }, 100);
   if (this.previous) {
    previousbuttons = this.document.body.querySelector('#' + this.previous + ' .' + this.buttonGroup).getElementsByTagName('button');
    for (const button of previousbuttons) {
      button.disabled = false;
    }
   }

  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.hide();
    }
  }
}
