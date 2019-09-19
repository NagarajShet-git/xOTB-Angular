import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/checkbox/README.md';
import { XotbCheckboxModule } from 'projects/checkbox/src/public-api';
import { DemoCheckboxesComponent } from 'projects/xotb-demo/src/app/examples/checkboxes/checkboxes.component';

storiesOf('Checkbox', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbCheckboxModule]
    })
  )
  .add('default', () => ({ component: DemoCheckboxesComponent }), {
    notes: md
  });
