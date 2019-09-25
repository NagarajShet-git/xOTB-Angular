import { storiesOf, moduleMetadata } from '@storybook/angular';
import { DemoWelcomeComponent } from 'projects/xotb-demo/src/app/examples/welcome/welcome.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('Welcome', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPanelModule]
    })
  )
  .add(
    'ng-xotb',
    () => ({
      component: DemoWelcomeComponent
    }),
    {
      options: {
        isToolshown: false
      }
    }
  );
