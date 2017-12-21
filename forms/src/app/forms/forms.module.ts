import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
  ],
  declarations: [LoginFormComponent, SignupFormComponent]
})
export class ProjectFormsModule { }
