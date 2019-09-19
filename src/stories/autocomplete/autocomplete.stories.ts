import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/comboboxes/README.md';
import { XotbComboboxesModule } from 'ng-xotb/comboboxes';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DemoAutoCompleteComponent } from '../../../projects/xotb-demo/src/app/examples/autocomplete/autocomplete.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

let filteredHeroes$: Observable<any[]>;

storiesOf('Autocomplete', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbComboboxesModule, ReactiveFormsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoAutoCompleteComponent
    }),
    {
      notes: { markdown: md, Intro: md }
    }
  );
