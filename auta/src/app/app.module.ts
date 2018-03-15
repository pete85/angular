import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
