import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewEncapsulation,
  ViewContainerRef,
  Inject
} from '@angular/core';
import { HTML_CODES } from '../../constants/constants';
import { IModalOptions } from '../../i-modal-window-options';
import { ModalAppService } from '../../modal-app.service';
import { ComponentInjectService } from '../../service/ComponentInject.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SecondComponentComponent implements OnInit {
  title: String = 'Title';
  content: Object = 'Content';
  isNextModalRequired: boolean = false;
  modalWindowOptions: IModalOptions;

  @Input() modalOptions: IModalOptions;

  @Input() modal;

  @Input() buttonGroup: any;

  @ViewChild('modal3') modal3;

  public buttonGrp = 'modal-footer';

  public close = HTML_CODES.close;

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
    this.modalWindowOptions = this.modalOptions.nextModalOptions;
    this.title = this.modalOptions.title;
    this.isNextModalRequired = this.modalOptions.isNextModalRequired;
    this.content = this.modalOptions.content;
    this.buttonGrp = this.buttonGroup || this.buttonGrp;

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
    alert('changes for Modal 2 saved');
  }
}
