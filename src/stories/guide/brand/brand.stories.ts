import { storiesOf, moduleMetadata } from '@storybook/angular';
import { centered } from '@storybook/addon-centered/angular';
import { IconographyComponent } from 'projects/xotb-demo/src/app/components/iconography/iconography.component';
import { XotbPanelModule } from 'projects/panel/src/public-api';

storiesOf('The GUIDE|Brand', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPanelModule]
    })
  )
  .addDecorator(centered)
  .add(
    'Principle',
    () => ({
      template: '<p>...to be constructed</p>'
    }),
    {
      options: {
        isToolshown: false
      }
    }
  )

  .add(
    'Typography',
    () => ({
      template: '<p>...to be constructed</p>'
    }),
    {
      options: {
        isToolshown: false
      }
    }
  )
  .add(
    'Colours',
    () => ({
      template: '<p>...to be constructed</p>'
    }),
    {
      options: {
        isToolshown: false
      }
    }
  )
  .add(
    'Themes',
    () => ({
      template: '<p>...to be constructed</p>'
    }),
    {
      options: {
        isToolshown: false
      }
    }
  );

storiesOf('The GUIDE|Brand', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbPanelModule]
    })
  )
  .add(
    'Iconography',
    () => ({
      component: IconographyComponent
    }),
    {
      options: {
        isToolshown: false
      }
    }
  );
