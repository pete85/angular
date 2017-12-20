import { NgModule } from '@angular/core';
import {
  MdSidenavModule,
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdTabsModule,
  MdCardModule,
  MdListModule,
  MdCheckboxModule,
  MdRadioModule,
  MdInputModule,
  MdDialogModule,
  MdSnackBarModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdMenuModule,
  MdGridListModule

} from '@angular/material';

@NgModule({
  imports: [
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdTabsModule,
    MdCardModule,
    MdListModule,
    MdCheckboxModule,
    MdRadioModule,
    MdInputModule,
    MdDialogModule,
    MdSnackBarModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdMenuModule,
    MdGridListModule


  ],
  exports: [
    MdSidenavModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdTabsModule,
    MdCardModule,
    MdListModule,
    MdCheckboxModule,
    MdRadioModule,
    MdInputModule,
    MdDialogModule,
    MdSnackBarModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdMenuModule,
    MdGridListModule
  ]
})
export class MaterialImportModule {
}
