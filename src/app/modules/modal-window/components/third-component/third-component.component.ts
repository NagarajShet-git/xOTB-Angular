import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  ViewContainerRef,
  ViewChild,
  Inject
} from '@angular/core';
import { HTML_CODES } from '../../constants/constants';
import { IModalOptions } from '../../i-modal-window-options';
import { ModalAppService } from '../../modal-app.service';
import { ComponentInjectService } from '../../service/ComponentInject.service';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ThirdComponentComponent implements OnInit {
  title: String = 'Title';
  content: Object = 'Content';
  isNextModalRequired: boolean = false;
  modalWindowOptions: IModalOptions;

  @Input() modalOptions: IModalOptions;

  @Input() modal;

  public close = HTML_CODES.close;

  public buttonGroup = 'modal-footer';

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
    alert('changes for Modal 3 saved');
  }
}
