import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/textarea/README.md';
import { XotbCheckboxModule } from 'projects/checkbox/src/public-api';
import { XotbTextareaModule } from 'projects/textarea/src/public-api';

storiesOf('TextArea', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbTextareaModule, XotbCheckboxModule]
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
          <xotb-textarea label="Input Label" [error]="hasError ? error : null">
          <textarea
            xotb
            [required]="required"
            [disabled]="disabled"
            placeholder="Placeholder Text"
          ></textarea>
        </xotb-textarea>
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
