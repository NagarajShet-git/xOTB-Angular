import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/accordion/README.md';
import { XotbAccordionModule } from 'projects/accordion/src/public-api';
import { DemoAccordinComponent } from 'projects/xotb-demo/src/app/examples/accordion/accordion.component';

storiesOf('Accordion', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbAccordionModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoAccordinComponent
    }),
    {
      notes: md
    }
  );
