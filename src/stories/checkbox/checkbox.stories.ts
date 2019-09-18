import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/checkbox/README.md';
import { XotbCheckboxModule } from 'projects/checkbox/src/public-api';

storiesOf('Checkbox', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbCheckboxModule]
    })
  )
  .add(
    'default',
    () => {
      return {
        template: `
        <div>
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
            <xotb-checkbox label="Checkbox Label" [error]="hasError ? error : null">
                <input xotb type="checkbox" [required]="required" [disabled]="disabled" />
            </xotb-checkbox>
        </div>`,
        props: {
          error: 'Input has some error.'
        }
      };
    },
    {
      notes: md
    }
  );
