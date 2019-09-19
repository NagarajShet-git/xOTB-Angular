import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/sections/README.md';
import { XotbSectionsModule } from 'projects/sections/src/public-api';
import { DemoSectionsComponent } from 'projects/xotb-demo/src/app/examples/sections/sections.component';

storiesOf('Section', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbSectionsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoSectionsComponent
    }),
    {
      notes: md
    }
  );
