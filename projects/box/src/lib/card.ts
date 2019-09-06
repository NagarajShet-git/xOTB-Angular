import { Component } from '@angular/core';

@Component({
  selector: 'xotb-card,[xotbCard]',
  template: `
    <xotb-styled-component>
      <div class="xotb-card">
        <ng-content></ng-content>
      </div>
    </xotb-styled-component>
  `
})
export class XotbCard {}
