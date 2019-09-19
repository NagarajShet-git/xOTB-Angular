import { storiesOf, moduleMetadata } from '@storybook/angular';

import md from 'projects/file-upload/README.md';
import { XotbFileUploadModule } from 'projects/file-upload/src/public-api';
import { FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { DemoFileUploadComponent } from 'projects/xotb-demo/src/app/examples/file-upload/file-upload.component';

storiesOf('File Upload', module)
  .addDecorator(
    moduleMetadata({
      imports: [XotbFileUploadModule, ReactiveFormsModule]
    })
  )
  .add('default', () => ({ component: DemoFileUploadComponent }), {
    notes: md
  });
