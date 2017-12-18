import {Component, OnInit, AfterViewInit, ViewChild, Input} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit, AfterViewInit {

  @Input() balanceListMonthly: any[];
  displayedColumns = ['month', 'interest', 'paid', 'balance'];
  dataSource: any;

  message: string;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.balanceListMonthly);

    for (let i = 0; i < this.balanceListMonthly.length; i++) {
      console.log(this.balanceListMonthly[i].interest);
    }
    // console.log('Balance list' + this.balanceListMonthly);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  month: number;
  interest: number;
  paid: number;
  balance: number;
}
