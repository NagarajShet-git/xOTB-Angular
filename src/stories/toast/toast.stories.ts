import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/toast/README.md';
import { XotbToastModule } from 'ng-xotb/controls/toast';
import { DemoToastComponent } from 'projects/xotb-demo/src/app/examples/toast/toast.component';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbToastModule, XotbButtonsModule]
    })
  )
  .add(
    'Toast',
    () => ({
      component: DemoToastComponent
    }),
    {
      notes: md
    }
  );
