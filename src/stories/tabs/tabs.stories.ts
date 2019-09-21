import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/tabs/README.md';
import { DemoTabsComponent } from 'projects/xotb-demo/src/app/examples/tabs/tabs.component';
import { XotbTabsModule } from 'ng-xotb/navigators/tabs';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';

storiesOf('Navigators', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbTabsModule, XotbButtonsModule]
    })
  )
  .add(
    'Tabs',
    () => ({
      component: DemoTabsComponent
    }),
    {
      notes: md
    }
  );
