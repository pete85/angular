import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    const mysql = require('mysql');
    const connection = mysql.createConnection({
      host     : 'pete85com1.ipagemysql.com',
      user     : 'pete85',
      password : 'Vectr@19CDti',
      database : 'pete85portfolio'
    });

    connection.connect();

    connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
      if (err) throw err
      console.log('The solution is: ', rows[0].solution)
    });

    connection.end();

  }

}
