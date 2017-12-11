import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

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
