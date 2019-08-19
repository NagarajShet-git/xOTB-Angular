import { Component } from '@angular/core';

@Component({
  templateUrl: './select.component.html'
})
export class DemoSelectComponent {
  required = false;

  hasError = false;
  error = 'The input has an error!';

  disabled = false;
}
