import {Component, OnInit} from '@angular/core';

// REACTIVE FORM BUILDING BLOCKS
// FormGroup is used as a data type for form model. Root FormGroup is the form itself.
import {FormGroup, FormControl} from '@angular/forms';

import {Customer} from '../customer';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form-reactive.component.html',
  styleUrls: ['./signup-form-reactive.component.scss']
})
export class SignupFormReactiveComponent implements OnInit {

  signupForm: FormGroup;
  customer: Customer = new Customer();
  counties = [
    {code: 'BED', name: 'Bedfordshire'},
    {code: 'BER', name: 'Berkshire'},
    {code: 'BRI', name: 'Bristol'},
    {code: 'BUC', name: 'Buckinghamshire'},
    {code: 'CAM', name: 'Cambridgeshire'},
    {code: 'CHE', name: 'Cheshire'},
    {code: 'COR', name: 'Cornwall'},
    {code: 'COU', name: 'County Durham'},
    {code: 'DER', name: 'Derbyshire'},
    {code: 'DEV', name: 'Devon'},
    {code: 'DOR', name: 'Dorset'},
    {code: 'ESS', name: 'Essex'},
    {code: 'GLO', name: 'Gloucestershire'},
    {code: 'HAM', name: 'Hampshire'},
    {code: 'HER', name: 'Hertfordshire'},
    {code: 'HUN', name: 'Huntingdonshire'},
    {code: 'KEN', name: 'Kent'},
    {code: 'LAN', name: 'Lancashire'},
    {code: 'LEI', name: 'Leicestershire'},
    {code: 'LIN', name: 'Lincolnshire'},
    {code: 'MID', name: 'Middlesex'},
    {code: 'NOR', name: 'Norfolk'},
    {code: 'NOA', name: 'Northamptonshire'},
    {code: 'NOH', name: 'Northumberland'},
    {code: 'NOT', name: 'Nottinghamshire'},
    {code: 'OXF', name: 'Oxfordshire'},
    {code: 'SOM', name: 'Somerset'},
    {code: 'STA', name: 'Staffordshire'},
    {code: 'SUF', name: 'Suffolk'},
    {code: 'SUR', name: 'Surrey'},
    {code: 'SUS', name: 'Sussex'},
    {code: 'WAR', name: 'Warwickshire'},
    {code: 'WIL', name: 'Wiltshire'},
    {code: 'WOR', name: 'Worcestershire'},
    {code: 'YOR', name: 'Yorkshire'}
  ];

  constructor() {
  }

  ngOnInit() {
    // Root FormGroup initialisation
    this.signupForm = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl(),
      sendCatalog: new FormControl(true)
    });
  }


  save() {
    console.log(this.signupForm);
    console.log('Saved: ' + JSON.stringify(this.signupForm.value));
  }

  setValue(): void {
    this.signupForm.setValue({
      firstName: 'Jack',
      lastName: 'Smith',
      email: 'jacksmith@gmail.com',
      sendCatalog: false
    });
  }

  patchValue(): void {
    this.signupForm.patchValue({
      firstName: 'Jack',
      lastName: 'Smith',
    });
  }

}
