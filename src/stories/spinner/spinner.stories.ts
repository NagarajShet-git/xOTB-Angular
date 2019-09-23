import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/spinner/README.md';
import { DemoSpinnerComponent } from 'projects/xotb-demo/src/app/examples/spinner/spinner.component';
import { XotbSpinnerModule } from 'ng-xotb/controls/spinner';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbSpinnerModule]
    })
  )
  .add(
    'Spinner',
    () => ({
      component: DemoSpinnerComponent
    }),
    {
      notes: md
    }
  );
