import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/progressbar/README.md';
import { DemoProgressbarComponent } from 'projects/xotb-demo/src/app/examples/progressbar/progressbar.component';
import { XotbProgressbarModule } from 'projects/progressbar/src/public-api';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';

storiesOf('Progressbar', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbProgressbarModule, XotbButtonsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoProgressbarComponent
    }),
    {
      notes: md
    }
  );
