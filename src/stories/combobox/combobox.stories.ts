import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/comboboxes/README.md';
import { XotbComboboxesModule } from 'ng-xotb/comboboxes';
import { action } from '@storybook/addon-actions';

storiesOf('Combobox', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbComboboxesModule]
    })
  )
  .add(
    'default',
    () => ({
      template: `
        <xotb-combobox
            label="Make a choice"
            [options]="options"
            [(open)]="open"
            [(selection)]="selection"
            (selectionChange)="handlerChange($event)"
            >
            <input xotbCombobox placeholder="Select an Option"  />
        </xotb-combobox>
      `,
      props: {
        options: ['One', 'Two', 'Three'],
        selection: null,
        open: false,
        handlerChange: e => {
          console.log(e);

          action('selectionChanged')(e);
        }
      }
    }),
    {
      notes: md
    }
  );
