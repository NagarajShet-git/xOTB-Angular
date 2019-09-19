import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/textarea/README.md';
import { XotbCheckboxModule } from 'projects/checkbox/src/public-api';
import { XotbTextareaModule } from 'projects/textarea/src/public-api';
import { DemoTextareaComponent } from 'projects/xotb-demo/src/app/examples/textarea/textarea.component';

storiesOf('TextArea', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbTextareaModule, XotbCheckboxModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoTextareaComponent
    }),
    {
      notes: md
    }
  );
