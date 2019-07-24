import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {IModalOptions} from './i-modal-window-options';
import { ModalAppService } from './modal-app.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalComponent implements OnInit{
  title = 'modal-window';

  public buttonGrp = 'modal-footer';
  modalWindowOptions:IModalOptions;
  @Input() modalOptions:IModalOptions;
  @Input() buttonGroup:any;
  @Input() current;
  @Input() previous;

  @Output() buttonEvent = new EventEmitter<object>();

  constructor(public modalService: ModalAppService){}

  ngOnInit() {
    console.log("outer modal",this.modalOptions);
    this.modalWindowOptions = this.modalOptions;
    this.buttonGrp = this.buttonGroup || this.buttonGrp;

    this.modalService.modalButtonAction$.subscribe((obj)=>{this.buttonEvent.emit(obj)});

  }


}
