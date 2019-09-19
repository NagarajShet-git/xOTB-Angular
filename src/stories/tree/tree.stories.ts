import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/tree/README.md';
import { XotbTreeModule } from 'projects/tree/src/public-api';
import { DemoTreeComponent } from 'projects/xotb-demo/src/app/examples/tree/tree.component';

storiesOf('Tree', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbTreeModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoTreeComponent
    }),
    {
      notes: md
    }
  );
