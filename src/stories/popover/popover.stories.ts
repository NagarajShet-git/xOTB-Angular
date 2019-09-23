import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/popovers/README.md';
import { DemoPopoverComponent } from 'projects/xotb-demo/src/app/examples/popovers/popovers.component';
import { XotbPopoversModule } from 'ng-xotb/controls/popovers';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPopoversModule, XotbButtonsModule]
    })
  )
  .add(
    'Popover',
    () => ({
      component: DemoPopoverComponent
    }),
    {
      notes: md
    }
  );
