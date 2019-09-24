import { storiesOf, moduleMetadata } from '@storybook/angular';
import { Welcome } from 'projects/xotb-demo/src/app/examples/welcome/welcome.component';

storiesOf('Welcome', module)
  .addDecorator(
    moduleMetadata({
      imports: []
    })
  )
  .add(
    'ng-xotb',
    () => ({
      component: Welcome
    }),
    {
      options: {
        isToolshown: false
      }
    }
  );
