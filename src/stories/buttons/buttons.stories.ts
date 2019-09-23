import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/buttons/README.md';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';
import { DemoButtonsComponent } from 'projects/xotb-demo/src/app/examples/buttons/buttons.component';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbButtonsModule]
    })
  )
  .add(
    'Buttons',
    () => ({
      component: DemoButtonsComponent
    }),
    {
      notes: md
    }
  );
