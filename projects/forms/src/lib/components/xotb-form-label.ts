import {
  OnInit,
  Input,
  TemplateRef,
  Component,
  ChangeDetectionStrategy,
  ElementRef,
  Renderer2
} from '@angular/core';
import { InputBoolean } from 'ng-xotb/utility';

@Component({
  selector: 'label[xotbFormLabel]',
  templateUrl: './xotb-form-label.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./xotb-form-label.css']
})
export class XotbFormLabel implements OnInit {
  @Input('xotbFormLabel') label: string | TemplateRef<any>;

  @Input('xotbFormLabelClass') styleClass = 'xotb-form-element__label';

  @Input() @InputBoolean() required: boolean;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.addClass(this.element.nativeElement, this.styleClass);
  }
}
