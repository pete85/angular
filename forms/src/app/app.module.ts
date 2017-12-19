import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// BOOTSTRAP
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

// ROUTER
import {routing} from './app.routing';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';

// MODULES
import { ProjectFormsModule } from './forms/forms.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    NotFoundComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AlertModule.forRoot(),
    routing,
    ProjectFormsModule
  ],
  exports: [
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    ProjectFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
