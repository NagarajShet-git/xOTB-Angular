import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/comboboxes/README.md';
import { XotbComboboxesModule } from 'ng-xotb/controls/comboboxes';
import { DemoComboboxesComponent } from 'projects/xotb-demo/src/app/examples/comboboxes/combobox.component';

storiesOf('Combobox', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbComboboxesModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoComboboxesComponent
    }),
    {
      notes: md
    }
  );
