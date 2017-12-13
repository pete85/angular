import {Component, OnInit, DoCheck} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {

  model: any = {};
  noOfPayments: number; // Number of periodic payments
  interestRate: number; // Periodic Interest Rate
  discountFactor: number; // Discount factor
  monthlyCost: number; // Monthly payment amount

  // periods = [12, 24, 36, 48, 60, 72, 84];

  periods = [
    {value: 1, view: '1 year'}, {value: 2, view: '2 years'}, {value: 3, view: '3 years'}, {value: 4, view: '4 years'},
    {value: 5, view: '5 years'}, {value: 6, view: '6 years'}, {value: 7, view: '7 years'}, {value: 8, view: '8 years'},
    {value: 9, view: '9 years'}, {value: 10, view: '10 years'}, {value: 11, view: '11 years'}, {value: 12, view: '12 years'},
    {value: 13, view: '13 years'}, {value: 14, view: '14 years'}, {value: 15, view: '15 years'}, {value: 16, view: '16 years'},
    {value: 17, view: '17 years'}, {value: 18, view: '18 years'}, {value: 19, view: '19 years'}, {value: 20, view: '20 years'},
    {value: 21, view: '21 years'}, {value: 22, view: '22 years'}, {value: 23, view: '23 years'}, {value: 24, view: '24 years'},
    {value: 25, view: '25 years'}, {value: 26, view: '26 years'}, {value: 27, view: '27 years'}, {value: 28, view: '28 years'},
    {value: 29, view: '29 years'}, {value: 30, view: '30 years'}, {value: 31, view: '31 years'}, {value: 32, view: '32 years'},
    {value: 33, view: '33 years'}, {value: 34, view: '34 years'}, {value: 35, view: '35 years'}, {value: 36, view: '36 years'},
  ];

  ngOnInit() {
  }

  ngDoCheck() {
    this.noOfPayments = this.model.loanPeriod * 12;
    this.interestRate = (this.model.interestRate / 100) / 12;
    console.log(this.model);
    this.calculateMonthlyCost();
  }

  calculateMonthlyCost() {

    const a = this.interestRate * Math.pow(1 + this.interestRate, this.noOfPayments);
    const b = Math.pow(1 + this.interestRate, this.noOfPayments) - 1;

    this.monthlyCost = this.model.amountBorrowed * a / b;

    return this.monthlyCost;

  }
}
