import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/input/README.md';
import { XotbInputModule } from 'projects/input/src/public-api';
import { XotbCheckboxModule } from 'projects/checkbox/src/public-api';

storiesOf('Input', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbInputModule, XotbCheckboxModule]
    })
  )
  .add(
    'default',
    () => {
      return {
        template: `
        <div>
                <div>
                    <xotb-checkbox label="Required">
                        <input xotb type="checkbox" [(ngModel)]="required" />
                    </xotb-checkbox>
                </div>
                <div>
                    <xotb-checkbox label="Error">
                        <input xotb type="checkbox" [(ngModel)]="hasError" />
                    </xotb-checkbox>
                </div>
                <div>
                    <xotb-checkbox label="Disabled">
                        <input xotb type="checkbox" [(ngModel)]="disabled" />
                    </xotb-checkbox>
                </div>
            </div>
            <hr />
        <div style="width: 200px;">
            <xotb-input
            label="Input Label"
            fieldLevelHelpTooltip="Some helpful information"
            [error]="hasError ? error : null"
            >
            <input
                xotb
                type="input"
                [required]="required"
                [disabled]="disabled"
                placeholder="Placeholder Text"
            />
            </xotb-input>
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
