import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/comboboxes/README.md';
import { XotbComboboxesModule } from 'ng-xotb/controls/comboboxes';
import { DemoComboboxesComponent } from 'projects/xotb-demo/src/app/examples/comboboxes/combobox.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbComboboxesModule, XotbPanelModule]
    })
  )
  .add(
    'Combobox',
    () => ({
      component: DemoComboboxesComponent
    }),
    {
      notes: md
    }
  );
