import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/pick/README.md';
import { XotbPickModule } from 'projects/pick/src/lib';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';

storiesOf('Pick', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPickModule, XotbButtonsModule]
    })
  )
  .add(
    'default',
    () => {
      return {
        template: `
        <div class="xotb-text-title_caps xotb-m-bottom_small">Sixotbe selection</div>
        <div class="xotb-m-bottom_small">
            Selected:<code>{{ selected }}</code>
        </div>
        <div
            class="xotb-button-group"
            [(xotbPick)]="selected"
            xotbPickActiveClass="xotb-button_brand"
            role="group"
            >
            <button type="button" xotbButton xotbPickOption="left">Left</button>
            <button type="button" xotbButton xotbPickOption="middle">Middle</button>
            <button type="button" xotbButton [xotbPickOption]="'right'">Right</button>
        </div>

        <div class="xotb-text-title_caps xotb-m-bottom_small xotb-m-top_x-large">
            Multiple selection
        </div>
        <div class="xotb-m-bottom_small">
            Selected:<code>{{ multiple }}</code>
        </div>
        <div
            class="xotb-button-group"
            [(xotbPick)]="multiple"
            xotbPickMultiple
            xotbPickActiveClass="xotb-button_brand"
            role="group"
            >
            <button type="button" xotbButton xotbPickOption="left">Left</button>
            <button type="button" xotbButton xotbPickOption="middle">Middle</button>
            <button type="button" xotbButton [xotbPickOption]="'right'">Right</button>
        </div>

        <div class="xotb-text-title_caps xotb-m-bottom_small xotb-m-top_x-large">
            Multiple selection with object
        </div>
        <div class="xotb-m-bottom_small">
            Selected:<code>{{ multipleObject | json }}</code>
        </div>
        <div
            class="xotb-button-group"
            [(xotbPick)]="multipleObject"
            xotbPickMultiple
            xotbPickActiveClass="xotb-button_brand"
            role="group"
            >
            <button type="button" xotbButton xotbPickOption="left">Left</button>
            <button type="button" xotbButton xotbPickOption="middle">Middle</button>
            <button type="button" xotbButton [xotbPickOption]="'right'">Right</button>
        </div>

        `,
        props: {
          selected: 'middle',
          multiple: ['middle', 'right'],
          multipleObject: {
            left: true,
            middle: true
          }
        }
      };
    },
    {
      notes: md
    }
  );
