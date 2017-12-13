import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  // periods = [
  //   {value: 1, viewValue: 12},
  //   {value: 2, viewValue: 24},
  //   {value: 3, viewValue: 36},
  //   {value: 4, viewValue: 48},
  //   {value: 5, viewValue: 60},
  //   {value: 6, viewValue: 72}
  // ];

  periods = [12, 24, 36, 48, 60, 72, 84];

  interestRate: number;
  loanPeriod: number;
  model: any = {};

  ngOnInit() {
    this.interestRate = 1.49;
    this.loanPeriod = 48;

    console.log('Interest rate: ' + this.interestRate + '%, ' +' Period: ' + this.loanPeriod + ' months');
  }

  ngDoCheck() {
    console.log(this.model);
    this.calculateMonthlyCost();
  }

  calculateMonthlyCost() {
    let n = this.model.loanPeriod;
    let i = this.model.interestRate / 12;

    console.log('Number of payments: ' + n);
    console.log('Periodic Interest Rate: ' + i);

  }

  calculateLoan(rate, period) {
    this.interestRate = rate;
    this.loanPeriod = period;
  }
}
