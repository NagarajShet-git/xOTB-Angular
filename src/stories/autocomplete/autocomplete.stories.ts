import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/comboboxes/README.md';
import { XotbComboboxesModule } from 'ng-xotb/controls/comboboxes';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoAutoCompleteComponent } from 'projects/xotb-demo/src/app/examples/autocomplete/autocomplete.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';
storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbComboboxesModule, ReactiveFormsModule, XotbPanelModule]
    })
  )
  .add(
    'autocomplete',
    () => ({
      component: DemoAutoCompleteComponent
    }),
    {
      notes: { markdown: md, Intro: md }
    }
  );
