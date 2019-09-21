import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/input/README.md';
import { XotbInputModule } from 'ng-xotb/controls/input';
import { XotbCheckboxModule } from 'ng-xotb/controls/checkbox';
import { DemoInputComponent } from 'projects/xotb-demo/src/app/examples/input/input.component';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbInputModule, XotbCheckboxModule]
    })
  )
  .add(
    'Input',
    () => ({
      component: DemoInputComponent
    }),
    {
      notes: md
    }
  );
