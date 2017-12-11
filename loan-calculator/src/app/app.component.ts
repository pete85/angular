import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  periods = [
    {value: 1, viewValue: 12},
    {value: 2, viewValue: 24},
    {value: 3, viewValue: 36}
  ];

  interestRate: number;
  loanPeriod: number;
  model: any = {};

  ngOnInit() {
    this.interestRate = 1.49;
    this.loanPeriod = 48;

    console.log('Interest rate: ' + this.interestRate + '%, ' +' Period: ' + this.loanPeriod + ' months');
  }

  calculateLoan(rate, period) {
    this.interestRate = rate;
    this.loanPeriod = period;
  }
}
