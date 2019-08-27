import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoInputComponent } from './examples/input/input.component';
import { DemoTooltipsBasic } from './examples/tooltips/tooltips.component';
import { DemoSelectComponent } from './examples/select/select.component';
import { DemoCheckboxesComponent } from './examples/checkboxes/checkboxes.component';
import { DemoRadioGroupComponent } from './examples/radio-group/radio-group.component';
import { DemoFileUploadComponent } from  './examples/file-upload/file-upload.component';

const routes: Routes = [
  { path: 'input', component: DemoInputComponent },
  { path: 'tooltip', component: DemoTooltipsBasic },
  { path: 'select', component: DemoSelectComponent },
  { path: 'checkboxes', component: DemoCheckboxesComponent },
  { path: 'radiogroup', component: DemoRadioGroupComponent },
  { path: 'fileupload', component: DemoFileUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
