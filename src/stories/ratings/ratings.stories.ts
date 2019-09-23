import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/ratings/README.md';
import { DemoRatingsComponent } from 'projects/xotb-demo/src/app/examples/ratings/ratings.component';
import { XotbRatingsModule } from 'ng-xotb/controls/ratings';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbRatingsModule, XotbButtonsModule]
    })
  )
  .add(
    'Ratings',
    () => ({
      component: DemoRatingsComponent
    }),
    {
      notes: md
    }
  );
