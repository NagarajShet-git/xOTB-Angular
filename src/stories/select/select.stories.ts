import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/progressbar/README.md';
import { DemoSelectComponent } from 'projects/xotb-demo/src/app/examples/select/select.component';
import { XotbSelectModule } from 'projects/select/src/public-api';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';

storiesOf('Select', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbSelectModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoSelectComponent
    }),
    {
      notes: md
    }
  );
