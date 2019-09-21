import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/accordion/README.md';
import { XotbBoxModule } from 'ng-xotb/containers/box';
import { DemoCardComponent } from 'projects/xotb-demo/src/app/examples/card/card.component';
import { DemoHBoxComponent } from 'projects/xotb-demo/src/app/examples/hbox/hbox.component';
import { XotbButtonsModule } from 'ng-xotb/controls/buttons';
import { DemoVBoxComponent } from 'projects/xotb-demo/src/app/examples/vbox/vbox.component';

storiesOf('Containers', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbBoxModule, XotbButtonsModule]
    })
  )
  .add(
    'Card',
    () => ({
      component: DemoCardComponent
    }),
    {
      notes: md
    }
  )
  .add('HBox', () => ({
    component: DemoHBoxComponent
  }))
  .add('VBox', () => ({
    component: DemoVBoxComponent
  }));
