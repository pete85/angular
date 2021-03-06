import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

import {
  MatInputModule,
  MatSelectModule,
} from '@angular/material';
import { SourcesComponent } from './sources/sources.component';
import { PaymentsComponent } from './home/payments/payments.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SourcesComponent,
    PaymentsComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'sources',
        component: SourcesComponent
      },
      {
        path: 'payments',
        component: PaymentsComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      },

    ])
  ],
  exports: [
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatListModule,
    MatTableModule,
    MatMenuModule,
    MatPaginatorModule,
    SourcesComponent,
    PaymentsComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
