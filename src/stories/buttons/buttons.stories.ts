import { storiesOf, moduleMetadata } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import md from 'projects/buttons/README.md';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';

storiesOf('Buttons', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbButtonsModule]
    })
  )
  .add(
    'default',
    () => ({
      template: `
        <div>
            <button xotbButton variant="base" name="base" (click)="handlerClick($event)">base button</button>
            <button xotbButton variant="neutral" name="neutral" (click)="handlerClick($event)">normal button</button>
            <button xotbButton variant="brand" name="brand" (click)="handlerClick($event)">brancd button</button>
            <button xotbButton variant="outline-brand" name="outline-brand" (click)="handlerClick($event)">outline button</button>
            <button xotbButton variant="destructive" name="destructive" (click)="handlerClick($event)">danger button</button>
        </div>`,
      props: {
        handlerClick: e => {
          console.log(e);
          e.preventDefault();
          action(e.target.name)(e.target);
        }
      }
    }),
    {
      notes: md
    }
  );
