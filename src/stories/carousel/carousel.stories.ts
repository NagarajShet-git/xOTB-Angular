import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/carousel/README.md';
import { XotbCarouselModule } from 'ng-xotb/navigators/carousel';
import { DemoCarouselComponent } from 'projects/xotb-demo/src/app/examples/carousel/carousel.component';

storiesOf('Navigators', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbCarouselModule]
    })
  )
  .add(
    'Carousel',
    () => ({
      component: DemoCarouselComponent
    }),
    {
      notes: md
    }
  );
