import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/progressbar/README.md';
import { DemoSelectComponent } from 'projects/xotb-demo/src/app/examples/select/select.component';
import { XotbSelectModule } from 'ng-xotb/controls/select';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbSelectModule]
    })
  )
  .add(
    'Select',
    () => ({
      component: DemoSelectComponent
    }),
    {
      notes: md
    }
  );
