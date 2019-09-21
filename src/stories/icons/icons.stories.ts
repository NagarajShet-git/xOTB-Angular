import { storiesOf, moduleMetadata } from '@storybook/angular';
import { XotbIconsModule } from 'ng-xotb/controls/icons';
import md from 'projects/icons/README.md';
import { DemoIconsComponent } from 'projects/xotb-demo/src/app/examples/icons/icons.component';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbIconsModule]
    })
  )
  .add(
    'Icons',
    () => ({
      component: DemoIconsComponent
    }),
    {
      notes: md
    }
  );
