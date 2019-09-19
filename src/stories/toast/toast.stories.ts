import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/toast/README.md';
import { XotbToastModule } from 'projects/toast/src/public-api';
import { DemoToastComponent } from 'projects/xotb-demo/src/app/examples/toast/toast.component';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';

storiesOf('Toast', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbToastModule, XotbButtonsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoToastComponent
    }),
    {
      notes: md
    }
  );
