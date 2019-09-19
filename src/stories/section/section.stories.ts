import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/sections/README.md';
import { XotbSectionsModule } from 'projects/sections/src/public-api';

storiesOf('Section', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbSectionsModule]
    })
  )
  .add(
    'default',
    () => {
      return {
        template: `
        <div style="width:70%">
            <xotb-section [(open)]="open" title="Section Title">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec
                adipiscing tristique risus nec feugiat. Augue eget arcu dictum varius duis.
                Sed tempus urna et pharetra pharetra massa massa ultricies mi. Semper quis
                lectus nulla at volutpat diam. Vel orci porta non pulvinar neque laoreet. Amet
                facilisis magna etiam tempor orci eu. Vitae tortor condimentum lacinia quis
                vel eros. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Sit
                amet luctus venenatis lectus magna fringilla urna. Id ornare arcu odio ut sem
                nulla pharetra diam sit.
            </xotb-section>
        </div>
        `,
        props: {}
      };
    },
    {
      notes: md
    }
  );
