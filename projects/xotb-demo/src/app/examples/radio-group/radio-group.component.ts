import { Component } from '@angular/core';

@Component({
  templateUrl: './radio-group.component.html'
})
export class DemoRadioGroupComponent {
  hasError = false;
  required = true;
  error = 'error in field';
  disabled = false;
}
