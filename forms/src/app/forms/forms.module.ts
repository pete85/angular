import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { SignupFormReactiveComponent} from './signup-form-reactive/signup-form-reactive.component';
import {Form, FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    LoginFormComponent,
    SignupFormComponent,
    SignupFormReactiveComponent
  ]
})
export class ProjectFormsModule { }
