import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/pick/README.md';
import { XotbPickModule } from 'projects/pick/src/lib';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';
import { DemoPickComponent } from 'projects/xotb-demo/src/app/examples/pick/pick.component';

storiesOf('Pick', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPickModule, XotbButtonsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoPickComponent
    }),
    {
      notes: md
    }
  );
