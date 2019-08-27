import { Component } from '@angular/core';

@Component({
  templateUrl: './input.component.html'
})
export class DemoInputComponent {
  hasError = false;
  required = true;
  error = 'invalid data';
  disabled = false;
}
