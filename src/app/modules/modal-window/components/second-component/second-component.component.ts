import { Component, OnInit, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import { HTML_CODES} from '../../constants/constants';
import {IModalOptions} from '../../i-modal-window-options';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class SecondComponentComponent implements OnInit {

  title:String="Title";
  content:Object="Content";
  isNextModalRequired:boolean=false;
  modalWindowOptions:IModalOptions;

  @Input() modalOptions:IModalOptions;

  @Input() modal;
  
  @Input() buttonGroup:any;

  @ViewChild('modal3') modal3;

  public buttonGrp = 'modal-footer';

  public close = HTML_CODES.close;

  constructor() { }

  ngOnInit() {
    this.modalWindowOptions = this.modalOptions.nextModalOptions;
    this.title=this.modalOptions.title;
    this.isNextModalRequired = this.modalOptions.isNextModalRequired;
    this.content = this.modalOptions.content;
    this.buttonGrp = this.buttonGroup || this.buttonGrp;
  }

  save() {
    alert('changes for Modal 2 saved');
  }
}
