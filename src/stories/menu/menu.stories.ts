import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/menus/README.md';
import { XotbMenusModule } from 'projects/menus/src/public-api';
import { XotbIconsModule } from 'projects/icons/src/public-api';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';
import { DemoMenusComponent } from 'projects/xotb-demo/src/app/examples/menus/menus.component';

storiesOf('Menus', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbMenusModule, XotbIconsModule, XotbButtonsModule]
    })
  )
  .add('default', () => ({ component: DemoMenusComponent }), {
    notes: md
  });
