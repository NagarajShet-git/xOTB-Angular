import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/modals/README.md';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';
import { XotbModalsModule } from 'projects/modals/src/public-api';
import { DemoModalsComponent } from 'projects/xotb-demo/src/app/examples/modals/modals.component';
import { XotbInputModule } from 'projects/input/src/public-api';

storiesOf('Modals', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbModalsModule, XotbButtonsModule, XotbInputModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoModalsComponent
    }),
    {
      notes: md
    }
  );
