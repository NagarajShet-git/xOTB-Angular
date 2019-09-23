import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/checkbox/README.md';
import { XotbCheckboxModule } from 'ng-xotb/controls/checkbox';
import { DemoCheckboxesComponent } from 'projects/xotb-demo/src/app/examples/checkboxes/checkboxes.component';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbCheckboxModule]
    })
  )
  .add('Checkbox', () => ({ component: DemoCheckboxesComponent }), {
    notes: md
  });
