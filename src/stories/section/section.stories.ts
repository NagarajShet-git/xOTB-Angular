import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/sections/README.md';
import { XotbSectionsModule } from 'ng-xotb/containers/sections';
import { DemoSectionsComponent } from 'projects/xotb-demo/src/app/examples/sections/sections.component';

storiesOf('Containers', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbSectionsModule]
    })
  )
  .add(
    'Panel',
    () => ({
      component: DemoSectionsComponent
    }),
    {
      notes: md
    }
  );
