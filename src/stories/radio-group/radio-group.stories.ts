import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/radio-group/README.md';
import { XotbRadioGroupModule } from 'projects/radio-group/src/public-api';
import { XotbCheckboxModule } from 'projects/checkbox/src/public-api';

export default storiesOf('RadioGroup', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbRadioGroupModule, XotbCheckboxModule]
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
            <div style="width:200px">
                <ng-template #lbl><i>Radio Label 1</i></ng-template>
                <fieldset
                    xotb-radio-group
                    label="Radio Group Label"
                    [error]="hasError ? error : null"
                    [required]="required"
                >
                    <xotb-radio-option [label]="lbl">
                        <input xotb type="radio" [disabled]="disabled" />
                    </xotb-radio-option>
                    <xotb-radio-option label="Radio Label 2">
                        <input xotb type="radio" [disabled]="disabled" />
                    </xotb-radio-option>
                </fieldset>
            </div>
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
