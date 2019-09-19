import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/tabs/README.md';
import { DemoTabsComponent } from 'projects/xotb-demo/src/app/examples/tabs/tabs.component';
import { XotbTabsModule } from 'projects/tabs/src/public-api';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';

storiesOf('Tabs', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbTabsModule, XotbButtonsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoTabsComponent
    }),
    {
      notes: md
    }
  );
