import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/colorpicker/README.md';
import { XotbColorpickerModule } from 'projects/colorpicker/src/public-api';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';
import { DemoColorpickerComponent } from 'projects/xotb-demo/src/app/examples/colorpicker/colorpicker.component';

storiesOf('Colorpicker', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbColorpickerModule, XotbButtonsModule]
    })
  )
  .add('default', () => ({ component: DemoColorpickerComponent }), {
    notes: md
  });
