import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  goHome(): void {
    this._router.navigateByUrl('');
  }

  goLogin(): void {
    this._router.navigateByUrl('login');
  }

  goAbout(): void {
    this._router.navigateByUrl('about');
  }
}
