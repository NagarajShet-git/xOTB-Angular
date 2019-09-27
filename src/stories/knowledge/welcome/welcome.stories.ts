import { storiesOf, moduleMetadata } from '@storybook/angular';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

storiesOf('The KNOWLEDGE|Welcome', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPanelModule]
    })
  )
  .add(
    'About',
    () => ({
      template: `
        <div class="xotb-view-container">
          <h2 class="heading">About</h2>
          <p>The Clarity consists of predefined variables for basic design elements such as colour, typography, and iconography. With clearly authenticated guidelines and governance for design and content creation, we spend less time talking the guidelines to bring clarity for ourselves and more time creating designs and content that clearly serves our users.</p>
        </div>
        `
    }),
    {
      options: {
        isToolshown: false
      }
    }
  );
