# Pick

Make a group of elements behave like a set of radio buttons by using `xotbPick` and `xotbPickOption`. You can alternatively make them behave like a set of checkboxes, by attaching the `xotbPickMultiple` directive.

If you need to specify a custom class when the element is currently selected you can define the `xotbPickActiveClass` property either on the host element of `xotbPick` or on each `xotbPickOption` if you want to override it

## Usages

### module.ts
```javascript

...

import { XotbButtonsModule } from 'ng-xotb/buttons';
import { XotbPickModule } from 'ng-xotb/pick'

@NgModule({
    imports:[XotbPickModule, XotbButtonsModule]
    ...
})

...
```

### component.html
```html
<div
    class="xotb-button-group"
    [(xotbPick)]="selected"
    xotbPickActiveClass="xotb-button_brand"
    role="group"
    >
    <button type="button" xotbButton xotbPickOption="left">Left</button>
    <button type="button" xotbButton xotbPickOption="middle">Middle</button>
    <button type="button" xotbButton [xotbPickOption]="'right'">Right</button>
</div>
```

### component.ts
```javascript

...

@Component({
    templateUrl:'./component.html',
    ...
})
export class DemoComponent {
    selected: 'middle'
}

...
```

## API
 
### [xotbPick]

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[xotbPick]` | Currently selected option value | `any` |  |
| `[xotbPickMultiple]` | Whether multiple options can be selected. In this case, the `xotbPick` value should be an `array` or `object` | `boolean` | `false` |
| `[xotbPickActiveClass]` | Defines a custom class to be used when any of the options is selected | `string` |  |
| `(xotbPickChange)` | The value that will be selected when an `xotbPickOption` is selected | `EventEmitter` |  |
| `(xotbOptionDestroyed)` | Emits the value of any selected option that is destroyed  | `EventEmitter` |  |


### [xotbPickOption]

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| `[xotbPickOption]` | Option's value | `any` |  |
| `[xotbPickActiveClass]` | Defines a custom class to be used when the option is selected. Overrides the parent's xotbPick active class, if defined | `string` |  |
