import { storiesOf, moduleMetadata } from '@storybook/angular';
import { XotbIconsModule } from 'projects/icons/src/public-api';
import md from 'projects/icons/README.md';
import { DemoIconsComponent } from 'projects/xotb-demo/src/app/examples/icons/icons.component';

storiesOf('Icons', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbIconsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoIconsComponent
    }),
    {
      notes: md
    }
  );
