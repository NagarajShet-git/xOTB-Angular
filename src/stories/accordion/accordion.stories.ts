import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/accordion/README.md';
import { XotbAccordionModule } from 'projects/accordion/src/public-api';

storiesOf('Accordion', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbAccordionModule]
    })
  )
  .add(
    'default',
    () => {
      return {
        template: `
        <div style="padding:10px; border:1px solid #ddd">
            <ul xotb-accordion [(activeName)]="active">
                <ng-template xotbAccordionSection name="A" label="Accordion Title A"
                    >This is the content area for section A</ng-template
                >
                <ng-template xotbAccordionSection name="B" label="Accordion Title B"
                    >This is the content area for section B</ng-template
                >
                <ng-template xotbAccordionSection name="C" label="Accordion Title C"
                    >This is the content area for section C</ng-template
                >
            </ul>
        <div>
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
