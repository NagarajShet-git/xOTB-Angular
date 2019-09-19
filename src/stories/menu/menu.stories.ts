import { storiesOf, moduleMetadata } from '@storybook/angular';
import md from 'projects/menus/README.md';
import { XotbMenusModule } from 'projects/menus/src/public-api';
import { XotbIconsModule } from 'projects/icons/src/public-api';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';

storiesOf('Menus', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbMenusModule, XotbIconsModule, XotbButtonsModule]
    })
  )
  .add(
    'default',
    () => {
      return {
        template: `
        <span xotbDropdown [(open)]="open">
            <button class="xotb-button xotb-button_neutral" xotbDropdownTrigger>
                <span class="xotb-truncate">Select an item</span>
                <xotb-icon
                iconName="chevron-down"
                variant="default"
                size="x-small"
                ></xotb-icon>
            </button>
            <div class="xotb-dropdown xotb-dropdown_left">
                <ul class="dropdown__list" role="menu">
                <li class="xotb-dropdown__item" *ngFor="let item of items">
                    <a
                    role="menuitem"
                    xotbDropdownItem
                    (click)="selected = item.value; open = false"
                    >
                    <p class="xotb-truncate">{{ item.value }}</p>
                    <xotb-icon
                        [iconName]="item.icon"
                        variant="default"
                        size="x-small"
                    ></xotb-icon
                    ></a>
                </li>
                </ul>
            </div>
        </span>
        &nbsp;&nbsp;&nbsp;
        <button type="button" xotbButton (click)="open = true">Open</button>
        
        <br />
        <div class="xotb-m-top_large" *ngIf="selected">
            You selected:<b>{{ selected }}</b>
        </div>
        `,
        props: {
          selected: null,
          open: false,

          items: [
            { value: 'Item 1', icon: 'bar-chart' },
            { value: 'Item 2', icon: 'award' },
            { value: 'Item 3', icon: 'cast' }
          ]
        }
      };
    },
    {
      notes: md
    }
  );
