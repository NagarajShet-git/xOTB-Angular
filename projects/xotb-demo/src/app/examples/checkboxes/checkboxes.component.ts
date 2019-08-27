import { Component } from '@angular/core';

@Component({
  templateUrl: './checkboxes.component.html'
})
export class DemoCheckboxesComponent {
  hasError = false;
  required = true;
  disabled = false;
  error = 'error, invalid';
}
