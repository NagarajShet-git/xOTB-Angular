import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/breadcrumbs/README.md';
import { XotbBreadcrumbsModule } from 'projects/breadcrumbs/src/public-api';
import { DemoBreadcrumbsComponent } from 'projects/xotb-demo/src/app/examples/breadcrumbs/breadcrumbs.component';

storiesOf('Breadcrumb', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbBreadcrumbsModule]
    })
  )
  .add(
    'default',
    () => ({
      component: DemoBreadcrumbsComponent
    }),
    {
      notes: md
    }
  );
