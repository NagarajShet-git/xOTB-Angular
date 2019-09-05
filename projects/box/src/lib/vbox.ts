import { Component } from '@angular/core';

@Component({
  selector: 'xotb-vbox,[xotbVbox]',
  template: `
    <xotb-styled-component>
      <div class="xotb-vbox">
        <ng-content></ng-content>
      </div>
    </xotb-styled-component>
  `
})
export class VBox {}
