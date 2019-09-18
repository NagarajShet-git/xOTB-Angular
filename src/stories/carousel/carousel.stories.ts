import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/carousel/README.md';
import { XotbCarouselModule } from 'projects/carousel/src/public-api';

storiesOf('Carousel', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbCarouselModule]
    })
  )
  .add(
    'default',
    () => {
      return {
        template: `
        <div style="width: 480px; max-width: 100%">
            <xotb-carousel [(active)]="active">
                <xotb-carousel-image
                src="assets/images/carousel/carousel-01.jpg"
                header="First Card"
                description="First card description."
                alternativeText="First card accessible description."
                >
                </xotb-carousel-image>

            <xotb-carousel-image
                src="assets/images/carousel/carousel-02.jpg"
                header="Second Card"
                description="Second card description."
                alternativeText="Second card accessible description."
                ></xotb-carousel-image>

            <xotb-carousel-image
                src="assets/images/carousel/carousel-03.jpg"
                header="Third Card"
                ></xotb-carousel-image>
            </xotb-carousel>
        </div>
      `,
        props: {
          error: 'This Input has some error'
        }
      };
    },
    {
      notes: md
    }
  );
