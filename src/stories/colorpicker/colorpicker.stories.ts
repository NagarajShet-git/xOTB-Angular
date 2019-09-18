import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/colorpicker/README.md';
import { XotbColorpickerModule } from 'projects/colorpicker/src/public-api';

storiesOf('Colorpicker', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbColorpickerModule]
    })
  )
  .add(
    'default',
    () => {
      return {
        template: `
            <xotb-colorpicker
                [(ngModel)]="color"
                fieldLevelHelpTooltip="This is some useful info"
                ></xotb-colorpicker>
            <pre>Selected: {{ color }}</pre>
            <button type="button" xotbButton (click)="color = '#FF0000'">Select Red</button>
            <button type="button" xotbButton (click)="color = null">Clear</button>
      `,
        props: {
          color: '#5679C0'
        }
      };
    },
    {
      notes: md
    }
  );
