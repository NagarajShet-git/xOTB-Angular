import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/carousel/README.md';
import { XotbCarouselModule } from 'projects/carousel/src/public-api';
import { DemoCarouselComponent } from 'projects/xotb-demo/src/app/examples/carousel/carousel.component';

storiesOf('Carousel', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbCarouselModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoCarouselComponent
    }),
    {
      notes: md
    }
  );
