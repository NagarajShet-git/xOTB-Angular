import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/breadcrumbs/README.md';
import { XotbBreadcrumbsModule } from 'projects/breadcrumbs/src/public-api';

storiesOf('Breadcrumb', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbBreadcrumbsModule]
    })
  )
  .add(
    'default',
    () => {
      return {
        template: `
            <xotb-breadcrumbs assistiveText="Breadcrumbs">
                <a *xotbBreadcrumb href="javascript:void(0)">Home</a>
                <a *xotbBreadcrumb routerLink="../support" href="javascript:void(0)">About</a>
            </xotb-breadcrumbs>
      `,
        props: {}
      };
    },
    {
      notes: md
    }
  );
