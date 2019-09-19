# Sections

An expander control Section can be useful to show and hide sections of your UI and therefore, declutter your app


## Usages

### module.ts
```javascript

...

import { XotbMenusModule } from 'ng-xotb/menus';
import { XotbIconsModule } from 'ng-xotb/icons'

@NgModule({
    imports:[XotbMenusModule, XotbIconsModule]
    ...
})

...
```

### component.html
```html
<xotb-section [(open)]="open" title="Section Title">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
  incididunt ut labore et dolore magna aliqua. Sed adipiscing diam donec
  adipiscing tristique risus nec feugiat. Augue eget arcu dictum varius duis.
  Sed tempus urna et pharetra pharetra massa massa ultricies mi. Semper quis
  lectus nulla at volutpat diam. Vel orci porta non pulvinar neque laoreet. Amet
  facilisis magna etiam tempor orci eu. Vitae tortor condimentum lacinia quis
  vel eros. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Sit
  amet luctus venenatis lectus magna fringilla urna. Id ornare arcu odio ut sem
  nulla pharetra diam sit.
</xotb-section>
```

### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    open = false;
}

...
```

## API
 
### <xotb-section>

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[title]` | Section's title | `string` |  |
| `[open]` | Whether the section's body is collapsed or not | `boolean` | `false` |
| `[collapsible]` | Whether the section's body is able to collapse or not | `boolean` | `true` |
| `(openChange)` | Emits event when the body is going collapse or open | `EventEmitter<boolean>` |  |

