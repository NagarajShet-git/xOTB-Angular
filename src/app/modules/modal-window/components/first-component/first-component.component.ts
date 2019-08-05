import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewEncapsulation,
  Inject,
  ViewContainerRef
} from '@angular/core';
import { HTML_CODES } from '../../constants/constants';
import { IModalOptions } from '../../i-modal-window-options';
import { ModalAppService } from '../../modal-app.service';
import { ComponentInjectService } from '../../service/ComponentInject.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class FirstComponentComponent implements OnInit {
  @Input() modal;

  @Input() current;

  @Input() previous;

  @ViewChild('modal2') modal2;

  public buttonGrp = 'modal-footer';

  public close = HTML_CODES.close;
  title: String = 'Title';
  content: Object = 'Content';
  isNextModalRequired: boolean = false;
  modalWindowOptions: IModalOptions;
  headerStyle:String;
  footerStyle:String;
  bodyStyle:String;
  btnStyle:String;
  @Input() modalOptions: IModalOptions;
  @Input() buttonGroup: any;

  componentInjectService: ComponentInjectService;

  @ViewChild('dynamic', {
    read: ViewContainerRef
  })
  viewContainerRef: ViewContainerRef;

  constructor(
    @Inject(ComponentInjectService) componentInjectService,
    public modalService: ModalAppService
  ) {
    this.componentInjectService = componentInjectService;
  }

  ngOnInit() {
    console.log('first modal', this.modalOptions);
    this.modalWindowOptions = this.modalOptions.nextModalOptions;
    this.title = this.modalOptions.title;
    this.isNextModalRequired = this.modalOptions.isNextModalRequired;
    this.content = this.modalOptions.content;
    this.buttonGrp = this.buttonGroup || this.buttonGrp;
    this.headerStyle = this.modalOptions.headerStyle || "xOTB-modal-header";
    this.footerStyle = this.modalOptions.footerStyle || "xOTB-modal-footer";
    this.bodyStyle = this.modalOptions.bodyStyle || "xOTB-modal-body";
    this.btnStyle = this.modalOptions.btnStyle || "xOTB-btn";
    this.btnStyle += " xOTB-btn-autosize xOTB-btn-default";

    console.log("  btngroup ",this.buttonGrp);

    if (this.modalOptions.customComponent) {
      this.componentInjectService.setRootViewContainerRef(
        this.viewContainerRef
      );

      this.componentInjectService.addDynamicComponent(
        this.modalOptions.customComponent
      );
    }
  }

  save() {
    alert('changes for Modal 1 saved');
  }
}
