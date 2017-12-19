import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginFormComponent} from './forms/login-form/login-form.component';

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
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

export const routing = RouterModule.forRoot(appRoutes, { useHash: true });
