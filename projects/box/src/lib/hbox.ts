import { Component } from '@angular/core';

@Component({
  selector: 'xotb-hbox,[xotbHbox]',
  template: `
    <xotb-styled-component>
      <div class="xotb-hbox">
        <ng-content></ng-content>
      </div>
    </xotb-styled-component>
  `
})
export class HBox {}
