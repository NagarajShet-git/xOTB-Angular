import { storiesOf, addDecorator } from '@storybook/angular';
import { Welcome } from '@storybook/angular/demo';

storiesOf('Welcome', module).add(
  'ng-xotb',
  () => ({
    component: () => Welcome,
    props: {}
  }),
  {
    options: {
      isToolshown: false
    }
  }
);
