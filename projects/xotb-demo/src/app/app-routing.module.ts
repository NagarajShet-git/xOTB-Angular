import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoInputComponent } from './examples/input/input.component';
import { DemoTooltipsBasic } from './examples/tooltips/tooltips.component';
import { DemoSelectComponent } from './examples/select/select.component';
import { DemoCheckboxesComponent } from './examples/checkboxes/checkboxes.component';
import { DemoAccordinComponent } from './examples/accordion/accordion.component';
import { DemoButtonsComponent } from './examples/buttons/buttons.component';
import { DemoRadioGroupComponent } from './examples/radio-group/radio-group.component';
import { DemoTextareaComponent } from './examples/textarea/textarea.component';
import { DemoFileUploadComponent } from './examples/file-upload/file-upload.component';
import { DemoSliderComponent } from './examples/slider/slider.component';
import { DemoTabsComponent } from './examples/tabs/tabs.component';
import { DemoPopoverComponent } from './examples/popovers/popovers.component';
import { DemoIconsComponent } from './examples/icons/icons.component';
import { DemoProgressbarComponent } from './examples/progressbar/progressbar.component';
import { DemoSpinnerComponent } from './examples/spinner/spinner.component';
import { DemoButtonIconsComponent } from './examples/button-icons/button-icons.component';
import { DemoRatingsComponent } from './examples/ratings/ratings.component';
import { DemoModalsComponent } from './examples/modals/modals.component';
import { DemoSectionsComponent } from './examples/sections/sections.component';
import { DemoBreadcrumbsComponent } from './examples/breadcrumbs/breadcrumbs.component';
import { DemoCarouselComponent } from './examples/carousel/carousel.component';
import { DemoMenusComponent } from './examples/menus/menus.component';
import { DemoPickComponent } from './examples/pick/pick.component';
import { DemoToastComponent } from './examples/toast/toast.component';
import { DemoBoxComponent } from './examples/box/box.component';

const routes: Routes = [
  { path: 'input', component: DemoInputComponent },
  { path: 'tooltip', component: DemoTooltipsBasic },
  { path: 'select', component: DemoSelectComponent },
  { path: 'checkboxes', component: DemoCheckboxesComponent },
  { path: 'accordion', component: DemoAccordinComponent },
  { path: 'button', component: DemoButtonsComponent },
  { path: 'radiogroup', component: DemoRadioGroupComponent },
  { path: 'textarea', component: DemoTextareaComponent },
  { path: 'file-upload', component: DemoFileUploadComponent },
  { path: 'slider', component: DemoSliderComponent },
  { path: 'tabs', component: DemoTabsComponent },
  { path: 'popover', component: DemoPopoverComponent },
  { path: 'icons', component: DemoIconsComponent },
  { path: 'progressbar', component: DemoProgressbarComponent },
  { path: 'spinner', component: DemoSpinnerComponent },
  { path: 'button-icons', component: DemoButtonIconsComponent },
  { path: 'ratings', component: DemoRatingsComponent },
  { path: 'modals', component: DemoModalsComponent },
  { path: 'sections', component: DemoSectionsComponent },
  { path: 'breadcrumbs', component: DemoBreadcrumbsComponent },
  { path: 'carousel', component: DemoCarouselComponent },
  { path: 'menus', component: DemoMenusComponent },
  { path: 'pick', component: DemoPickComponent },
  { path: 'toast', component: DemoToastComponent },
  { path: 'box', component: DemoBoxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
