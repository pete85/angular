import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { FormPosterService } from './services/form-poster.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialImportModule} from './material-import.module';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialImportModule
  ],
  exports: [
    MaterialImportModule
  ],
  providers: [FormPosterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
