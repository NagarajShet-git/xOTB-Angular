import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/radio-group/README.md';
import { XotbRadioGroupModule } from 'projects/radio-group/src/public-api';
import { XotbCheckboxModule } from 'projects/checkbox/src/public-api';
import { DemoRadioGroupComponent } from 'projects/xotb-demo/src/app/examples/radio-group/radio-group.component';

storiesOf('RadioGroup', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbRadioGroupModule, XotbCheckboxModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoRadioGroupComponent
    }),
    {
      notes: md
    }
  );
