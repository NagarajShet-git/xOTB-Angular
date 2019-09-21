import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/modals/README.md';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';
import { XotbModalsModule } from 'ng-xotb/controls/modals';
import { DemoModalsComponent } from 'projects/xotb-demo/src/app/examples/modals/modals.component';
import { XotbInputModule } from 'ng-xotb/controls/input';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbModalsModule, XotbButtonsModule, XotbInputModule]
    })
  )
  .add(
    'Modals',
    () => ({
      component: DemoModalsComponent
    }),
    {
      notes: md
    }
  );
