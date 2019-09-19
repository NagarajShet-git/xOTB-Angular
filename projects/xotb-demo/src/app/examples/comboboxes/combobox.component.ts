import { Component } from '@angular/core';

@Component({
  templateUrl: './combobox.component.html'
})
export class DemoComboboxesComponent {
  options = ['One', 'Two', 'Three'];

  selection: string = null;

  open = false;
}
