import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/slider/README.md';
import { XotbSliderModule } from 'projects/slider/src/public-api';

storiesOf('Slider', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbSliderModule]
    })
  )
  .add(
    'default',
    () => {
      return {
        template: `
            <xotb-slider [(value)]="value" label="Slider label"></xotb-slider>
        `,
        props: {
          value: 80
        }
      };
    },
    {
      notes: md
    }
  );
