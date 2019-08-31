import { Component } from '@angular/core';

@Component({
  templateUrl: './button-icons.component.html'
})
export class DemoButtonIconsComponent {
  selected = true;
  iconType = 'border';
  sizes: string[] = ['x-small', 'small', 'large'];

  change() {
    this.selected = !this.selected;
    this.iconType = this.iconType === 'border' ? 'container' : 'border';
  }
}
