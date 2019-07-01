import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { HTML_CODES} from '../../constants/constants';
import {IModalOptions} from '../../i-modal-window-options';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ThirdComponentComponent implements OnInit {

  title:String="Title";
  content:Object="Content";
  isNextModalRequired:boolean=false;
  modalWindowOptions:IModalOptions;

  @Input() modalOptions:IModalOptions;

  @Input() modal;

  public close = HTML_CODES.close;

  public buttonGroup = 'modal-footer';

  constructor() { }

  ngOnInit() {
    this.modalWindowOptions = this.modalOptions.nextModalOptions;
    this.title=this.modalOptions.title;
    this.isNextModalRequired = this.modalOptions.isNextModalRequired;
    this.content = this.modalOptions.content;
  }

  save() {
    alert('changes for Modal 3 saved');
  }
}
