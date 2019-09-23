import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/colorpicker/README.md';
import { XotbColorpickerModule } from 'ng-xotb/controls/colorpicker';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';
import { DemoColorpickerComponent } from 'projects/xotb-demo/src/app/examples/colorpicker/colorpicker.component';

storiesOf('Controls', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbColorpickerModule, XotbButtonsModule]
    })
  )
  .add('Colorpicker', () => ({ component: DemoColorpickerComponent }), {
    notes: md
  });
