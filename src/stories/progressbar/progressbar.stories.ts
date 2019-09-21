import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/progressbar/README.md';
import { DemoProgressbarComponent } from 'projects/xotb-demo/src/app/examples/progressbar/progressbar.component';
import { XotbProgressbarModule } from 'ng-xotb/controls/progressbar';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbProgressbarModule, XotbButtonsModule]
    })
  )
  .add(
    'Progressbar',
    () => ({
      component: DemoProgressbarComponent
    }),
    {
      notes: md
    }
  );
