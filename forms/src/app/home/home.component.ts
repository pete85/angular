import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goLogin(): void {
    this._router.navigateByUrl('login');
  }

  goSignUp(): void {
    this._router.navigateByUrl('signup');
  }

  goSignUp2(): void {
    this._router.navigateByUrl('signup-reactive');
  }

  goMaterialForm(): void {
    window.open('http://pete85.com/projects/angular/forms/material/');
  }
}
