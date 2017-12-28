import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupFormReactiveComponent} from './signup-form-reactive/signup-form-reactive.component';
import {Form, FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormsModule
  ],
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    SignupFormReactiveComponent
  ]
})
export class ProjectFormsModule { }
