import { Component } from '@angular/core';
import { NODES } from './mock-nodes';

@Component({
  templateUrl: './tree.component.html'
})
export class DemoTreeComponent {
  title = 'Angular tree like structure';

  nodes = NODES; // pull here from the server.

  handleSelect(node) {
    console.log(node);
  }
}
