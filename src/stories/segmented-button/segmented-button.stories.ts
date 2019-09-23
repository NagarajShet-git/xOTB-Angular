import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/segmented-button/README.md';
import { XotbSegmentedButtonModule } from 'ng-xotb/controls/segmented-button';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';
import { DemoSegmentedButtonComponent } from 'projects/xotb-demo/src/app/examples/segmented-button/segmented-button.component';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbSegmentedButtonModule, XotbButtonsModule]
    })
  )
  .add(
    'Segmented Button',
    () => ({
      component: DemoSegmentedButtonComponent
    }),
    {
      notes: md
    }
  );
