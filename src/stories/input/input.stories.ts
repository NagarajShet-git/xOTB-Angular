import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/input/README.md';
import { XotbInputModule } from 'projects/input/src/public-api';
import { XotbCheckboxModule } from 'projects/checkbox/src/public-api';
import { DemoInputComponent } from 'projects/xotb-demo/src/app/examples/input/input.component';

storiesOf('Input', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbInputModule, XotbCheckboxModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoInputComponent
    }),
    {
      notes: md
    }
  );
