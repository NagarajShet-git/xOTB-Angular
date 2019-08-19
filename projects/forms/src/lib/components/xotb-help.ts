import {
  Component,
  ChangeDetectionStrategy,
  Input,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'xotb-form-help',
  templateUrl: './xotb-help.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.xotb__form-element__icon]': 'true'
  },
  styleUrls: ['./xotb-help.css']
})
export class XotbFormHelp {
  isOpen = false;

  @Input() content: string | TemplateRef<any>;
}
