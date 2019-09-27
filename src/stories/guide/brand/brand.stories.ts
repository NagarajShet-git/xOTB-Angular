import { storiesOf, moduleMetadata } from '@storybook/angular';
import { centered } from '@storybook/addon-centered/angular';
import { DemoWelcomeComponent } from 'projects/xotb-demo/src/app/examples/welcome/welcome.component';
import { XotbPanelModule } from 'ng-xotb/containers/panel';

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
    'Iconography',
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
