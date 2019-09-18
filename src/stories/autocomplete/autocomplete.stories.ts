import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/comboboxes/README.md';
import { XotbComboboxesModule } from 'ng-xotb/comboboxes';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { DemoAutoCompleteComponent } from '../../../projects/xotb-demo/src/app/examples/autocomplete/autocomplete.component';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

let filteredHeroes$: Observable<any[]>;

storiesOf('Autocomplete', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbComboboxesModule, ReactiveFormsModule]
    })
  )
  .add(
    'default',
    () => ({
      template: `
      <xotb-combobox
        label="Who is your favorite superhero?"
        [options]="filteredHeroes$ | async"
        [(open)]="open"
        [(selection)]="superhero"
        variant="lookup"
      >
        <input
          xotbCombobox
          type="text"
          placeholder="Hint: type 'man' or 'r'"
          [formControl]="inputCtrl"
        />
      </xotb-combobox>
    
    <div class="xotb-m-top_x-small" *ngIf="superhero">
      My favorite superhero is
      <strong>{{ superhero }}</strong>
    </div>`,
      component: DemoAutoCompleteComponent,
      props: {
        superheroes: [
          'Hulk',
          'Flash',
          'Superman',
          'Batman',
          'Spiderman',
          'Iron Man',
          'Thor',
          'Wolverine',
          'Deadpool'
        ],
        filteredHeroes$,
        superhero: null,
        inputCtrl: new FormControl(),
        filter: (value: string): any[] => {
          const filterValue = value.toLowerCase();
          return this.superheroes.filter(
            hero => hero.toLowerCase().indexOf(filterValue) > -1
          );
        },
        constructor: () => {
          this.filteredHeroes$ = this.inputCtrl.valueChanges.pipe(
            startWith(''),
            map(val => (!val ? [...this.superheroes] : this.filter(val)))
          );
        }
      }
    }),
    {
      notes: { markdown: md, Intro: md }
    }
  );
