import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/textarea/README.md';
import { XotbCheckboxModule } from 'ng-xotb/controls/checkbox';
import { XotbTextareaModule } from 'ng-xotb/controls/textarea';
import { DemoTextareaComponent } from 'projects/xotb-demo/src/app/examples/textarea/textarea.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbTextareaModule, XotbCheckboxModule, XotbPanelModule]
    })
  )
  .add(
    'TextArea',
    () => ({
      template: `<object data="README.html" type="text/html"></object>`
    }),
    {
      notes: md
    }
  );
