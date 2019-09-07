import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/**
 * Library modules
 */
import { XotbInputModule } from 'projects/input/src/public-api';
import { XotbTooltipsModule } from 'projects/tooltips/src/public-api';
import { XotbCheckboxModule } from 'projects/checkbox/src/public-api';
import { XotbSelectModule } from 'projects/select/src/public-api';
import { XotbAccordionModule } from 'projects/accordion/src/public-api';
import { XotbButtonsModule } from 'projects/buttons/src/public-api';
import { XotbRadioGroupModule } from 'projects/radio-group/src/public-api';
import { XotbTextareaModule } from 'projects/textarea/src/public-api';
import { XotbFileUploadModule } from 'projects/file-upload/src/public-api';
import { XotbSliderModule } from 'projects/slider/src/public-api';
import { XotbIconsModule } from 'projects/icons/src/public-api';
import { XotbTabsModule } from 'projects/tabs/src/public-api';
import { XotbPopoversModule } from 'projects/popovers/src/public-api';
import { XotbProgressbarModule } from 'projects/progressbar/src/public-api';
import { XotbSpinnerModule } from 'projects/spinner/src/public-api';
import { XotbButtonIconsModule } from 'projects/button-icons/src/public-api';
import { XotbRatingsModule } from 'projects/ratings/src/public-api';
import { XotbModalsModule } from 'projects/modals/src/public-api';
import { XotbSectionsModule } from 'projects/sections/src/public-api';
import { XotbBreadcrumbsModule } from 'projects/breadcrumbs/src/public-api';
import { XotbCarouselModule } from 'projects/carousel/src/public-api';
import { XotbMenusModule } from 'projects/menus/src/public-api';
import { XotbPickModule } from 'projects/pick/src/lib';
import { XotbToastModule } from 'projects/toast/src/public-api';
import { XotbBoxModule } from 'projects/box/src/public-api';
import { XotbComboboxesModule } from 'projects/comboboxes/src/public-api';
import { XotbColorpickerModule } from 'projects/colorpicker/src/public-api';

/**
 * Examples Component
 */
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
import { DemoIconsComponent } from './examples/icons/icons.component';
import { DemoPopoverComponent } from './examples/popovers/popovers.component';
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
import { DemoComboboxesComponent } from './examples/comboboxes/combobox.component';
import { DemoAutoCompleteComponent } from './examples/autocomplete/autocomplete.component';
import { DemoColorpickerComponent } from './examples/colorpicker/colorpicker.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoInputComponent,
    DemoTooltipsBasic,
    DemoSelectComponent,
    DemoCheckboxesComponent,
    DemoAccordinComponent,
    DemoButtonsComponent,
    DemoRadioGroupComponent,
    DemoTextareaComponent,
    DemoFileUploadComponent,
    DemoSliderComponent,
    DemoTabsComponent,
    DemoPopoverComponent,
    DemoIconsComponent,
    DemoProgressbarComponent,
    DemoButtonIconsComponent,
    DemoRatingsComponent,
    DemoModalsComponent,
    DemoSectionsComponent,
    DemoSpinnerComponent,
    DemoBreadcrumbsComponent,
    DemoCarouselComponent,
    DemoMenusComponent,
    DemoPickComponent,
    DemoToastComponent,
    DemoBoxComponent,
    DemoComboboxesComponent,
    DemoAutoCompleteComponent,
    DemoColorpickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    XotbInputModule,
    XotbTooltipsModule,
    XotbSelectModule,
    XotbCheckboxModule,
    XotbAccordionModule,
    XotbButtonsModule,
    XotbRadioGroupModule,
    XotbTextareaModule,
    XotbFileUploadModule,
    XotbSliderModule,
    XotbTabsModule,
    XotbPopoversModule,
    XotbIconsModule,
    XotbProgressbarModule,
    XotbButtonIconsModule,
    XotbRatingsModule,
    XotbModalsModule,
    XotbSectionsModule,
    XotbSpinnerModule,
    XotbBreadcrumbsModule,
    XotbCarouselModule,
    XotbMenusModule,
    XotbPickModule,
    XotbToastModule,
    XotbBoxModule,
    XotbComboboxesModule,
    XotbColorpickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
