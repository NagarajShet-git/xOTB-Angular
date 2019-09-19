import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/button-icons/README.md';
import { XotbButtonIconsModule } from 'projects/button-icons/src/public-api';
import { DemoButtonIconsComponent } from 'projects/xotb-demo/src/app/examples/button-icons/button-icons.component';

storiesOf('Button Icons', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbButtonIconsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoButtonIconsComponent
    }),
    {
      notes: md
    }
  );
