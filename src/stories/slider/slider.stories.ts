import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/slider/README.md';
import { XotbSliderModule } from 'projects/slider/src/public-api';
import { DemoSliderComponent } from 'projects/xotb-demo/src/app/examples/slider/slider.component';

storiesOf('Slider', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbSliderModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoSliderComponent
    }),
    {
      notes: md
    }
  );
