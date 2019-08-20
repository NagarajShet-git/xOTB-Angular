import { Component } from '@angular/core';

@Component({
  templateUrl: './input.component.html'
})
export class DemoInputComponent {
  hasError = true;
  required = true;
  error = 'invalid data';
  disabled = false;
}
