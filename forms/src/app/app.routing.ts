import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginFormComponent} from './forms/login-form/login-form.component';
import {SignupFormComponent} from './forms/signup-form/signup-form.component';
import {SignupFormReactiveComponent} from './forms/signup-form-reactive/signup-form-reactive.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'signup',
    component: SignupFormComponent
  },
  {
    path: 'signup-reactive',
    component: SignupFormReactiveComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
