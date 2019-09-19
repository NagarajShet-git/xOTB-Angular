import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import md from 'projects/buttons/README.md';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';
import { DemoButtonsComponent } from 'projects/xotb-demo/src/app/examples/buttons/buttons.component';

storiesOf('Buttons', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbButtonsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoButtonsComponent
    }),
    {
      notes: md
    }
  );
