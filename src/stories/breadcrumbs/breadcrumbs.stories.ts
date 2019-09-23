import { storiesOf, moduleMetadata } from '@storybook/angular';
import { XotbBreadcrumbsModule } from 'ng-xotb/navigators/breadcrumbs';

import md from 'projects/breadcrumbs/README.md';
import { DemoBreadcrumbsComponent } from 'projects/xotb-demo/src/app/examples/breadcrumbs/breadcrumbs.component';

storiesOf('Navigators', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbBreadcrumbsModule]
    })
  )
  .add(
    'Breadcrumb',
    () => ({
      component: DemoBreadcrumbsComponent
    }),
    {
      notes: md
    }
  );
