import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/datatable/README.md';
import { DemoDatatableComponent } from 'projects/xotb-demo/src/app/examples/datatable/datatable.component';
import { XotbDatatableModule } from 'projects/datatable/src/public-api';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';

storiesOf('Datatable', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbDatatableModule, XotbButtonsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoDatatableComponent
    }),
    {
      notes: md
    }
  );
