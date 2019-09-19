import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/popovers/README.md';
import { DemoPopoverComponent } from 'projects/xotb-demo/src/app/examples/popovers/popovers.component';
import { XotbPopoversModule } from 'projects/popovers/src/public-api';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';

storiesOf('Popover', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPopoversModule, XotbButtonsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoPopoverComponent
    }),
    {
      notes: md
    }
  );
