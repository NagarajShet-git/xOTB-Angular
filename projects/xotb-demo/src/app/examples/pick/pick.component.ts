import { Component } from '@angular/core';
@Component({
  templateUrl: 'pick.component.html'
})
export class DemoPickComponent {
  selected = 'middle';

  multiple = ['middle', 'right'];

  multipleObject = {
    left: true,
    middle: true
  };
}
