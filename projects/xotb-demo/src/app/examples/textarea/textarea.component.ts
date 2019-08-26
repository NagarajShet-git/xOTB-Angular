import { Component } from '@angular/core';

@Component({
  templateUrl: './textarea.component.html'
})
export class DemoTextareaComponent {
  hasError = true;
  required = true;
  disabled = false;
  error = 'error in textarea';
}
