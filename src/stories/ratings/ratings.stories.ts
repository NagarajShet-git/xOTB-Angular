import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/ratings/README.md';
import { DemoRatingsComponent } from 'projects/xotb-demo/src/app/examples/ratings/ratings.component';
import { XotbRatingsModule } from 'projects/ratings/src/public-api';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';

storiesOf('Ratings', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbRatingsModule, XotbButtonsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoRatingsComponent
    }),
    {
      notes: md
    }
  );
