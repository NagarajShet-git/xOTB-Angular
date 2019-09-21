import { Component } from '@angular/core';

@Component({
  templateUrl: './icon-button.component.html'
})
export class DemoIconButtonComponent {
  selected = true;
  iconType = 'border';
  sizes: string[] = ['x-small', 'small', 'large'];

  change() {
    this.selected = !this.selected;
    this.iconType = this.iconType === 'border' ? 'container' : 'border';
  }
}
