import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/button-icons/README.md';
import { XotbButtonIconsModule } from 'projects/button-icons/src/public-api';

storiesOf('Button Icon', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbButtonIconsModule]
    })
  )
  .add(
    'default',
    () => ({
      template: `
        <div>Variants</div>
        <button
            type="button"
            xotbButtonIcon
            iconName="airplay"
            title="Airplay (default/border)"
            ></button>
        <button
            type="button"
            xotbButtonIcon
            variant="brand"
            iconName="airplay"
            title="Airplay (brand)"
            ></button>
        <button
            type="button"
            xotbButtonIcon
            variant="container"
            iconName="airplay"
            title="Airplay (container)"
            ></button>
        <hr/>    
        <div>
            Sizes
        </div>
          <button
            type="button"
            xotbButtonIcon
            variant="brand"
            iconName="settings"
            title="Settings (container)"
            size="xx-small"
          ></button>
          <button
            type="button"
            xotbButtonIcon
            variant="brand"
            iconName="settings"
            title="Settings (container)"
            size="x-small"
          ></button>
          <button
            type="button"
            xotbButtonIcon
            variant="brand"
            iconName="settings"
            title="Settings (container)"
            size="small"
          ></button>
          <button
            type="button"
            xotbButtonIcon
            variant="brand"
            iconName="settings"
            title="Settings (container)"
          ></button>
          <button
            type="button"
            xotbButtonIcon
            variant="bare"
            iconName="settings"
            title="Settings (container)"
            size="x-small"
          ></button>
          <button
            type="button"
            xotbButtonIcon
            variant="bare"
            iconName="settings"
            title="Settings (container)"
            size="small"
          ></button>
          <button
            type="button"
            xotbButtonIcon
            variant="bare"
            iconName="settings"
            title="Settings (container)"
          ></button>
          <button
            type="button"
            xotbButtonIcon
            variant="bare"
            iconName="settings"
            title="Settings (container)"
            size="large"
          ></button>
      `,
      props: {}
    }),
    {
      notes: md
    }
  );
