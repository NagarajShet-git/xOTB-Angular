import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/spinner/README.md';
import { DemoSpinnerComponent } from 'projects/xotb-demo/src/app/examples/spinner/spinner.component';
import { XotbSpinnerModule } from 'projects/spinner/src/public-api';

storiesOf('Spinner', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbSpinnerModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoSpinnerComponent
    }),
    {
      notes: md
    }
  );
