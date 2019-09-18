import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/file-upload/README.md';
import { XotbFileUploadModule } from 'projects/file-upload/src/public-api';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

storiesOf('File Upload', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbFileUploadModule, ReactiveFormsModule]
    })
  )
  .add(
    'default',
    () => {
      return {
        template: `
        <xotb-file-upload
          label="Attachment"
          [formControl]="ctrl"
          [accept]="['image/*', 'application/pdf', '.mp3']"
          maxFiles="2"
          maxFilesize="1048576"
          [error]="ctrl.invalid ? errorTpl : null"
        ></xotb-file-upload>

        <div *ngIf="ctrl.valid">
          <div *ngFor="let file of ctrl.value">{{ file.name }}</div>
        </div>

        <ng-template #errorTpl>
          <ng-container *ngIf="ctrl.errors['required']"
            >Please select a file.</ng-container
          >
          <ng-container *ngIf="ctrl.errors.xotbFileUpload?.invalidType as file"
            >Oh no, invalid type<b> {{ file.type }}</b> for "{{
              file.name
            }}"!</ng-container
          >
          <ng-container *ngIf="ctrl.errors.xotbFileUpload?.maxFilesize as file"
            >"{{ file.name }}" is bigger than 1MB!</ng-container
          >
          <ng-container *ngIf="ctrl.errors.xotbFileUpload?.maxFiles"
            >Too many files selected!</ng-container
          >
        </ng-template>
      `,
        props: {
          ctrl: new FormControl(null, [Validators.required])
        }
      };
    },
    {
      notes: md
    }
  );
