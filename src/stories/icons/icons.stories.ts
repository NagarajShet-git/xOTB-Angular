import { storiesOf, moduleMetadata } from '@storybook/angular';
import { XotbIconsModule } from 'projects/icons/src/public-api';
import md from 'projects/icons/README.md';

storiesOf('Icons', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbIconsModule]
    })
  )
  .add(
    'default',
    () => {
      return {
        template: `
        <xotb-icon iconName="activity" size="xx-small"></xotb-icon>
        <xotb-icon iconName="activity" size="x-small"></xotb-icon>
        <xotb-icon iconName="activity" size="small"></xotb-icon>
        <xotb-icon iconName="activity"></xotb-icon>
        <xotb-icon iconName="activity" size="large"></xotb-icon>`,
        props: {}
      };
    },
    {
      notes: md
    }
  );
