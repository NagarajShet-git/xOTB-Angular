import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/accordion/README.md';
import { XotbAccordionModule } from 'ng-xotb/containers/accordion';
import { DemoAccordinComponent } from 'projects/xotb-demo/src/app/examples/accordion/accordion.component';

storiesOf('Containers', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbAccordionModule]
    })
  )
  .add(
    'Accordion',
    () => ({
      component: DemoAccordinComponent
    }),
    {
      notes: md
    }
  );
