import {Component, OnInit} from '@angular/core';

// REACTIVE FORM BUILDING BLOCKS
// FormGroup is used as a data type for form model. Root FormGroup is the form itself.
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

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

  regexEmail = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';

  regexPhone = '^(?:(?:\\(?(?:0(?:0|11)\\)?[\\s-]?\\(?|\\+)44\\)?[\\s-]?(?:\\(?0\\)?[\\s-]?)?)|(?:\\(?0))(?:(?:\\d{5}\\)?[\\s-]?\\d{4,5})|(?:\\d{4}\\)?[\\s-]?(?:\\d{5}|\\d{3}[\\s-]?\\d{3}))|(?:\\d{3}\\)?[\\s-]?\\d{3}[\\s-]?\\d{3,4})|(?:\\d{2}\\)?[\\s-]?\\d{4}[\\s-]?\\d{4}))(?:[\\s-]?(?:x|ext\\.?|\\#)\\d{3,4})?$';

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {

    document.getElementById('phoneRequired').innerHTML = '';

    // Root FormGroup initialisation
    this.signupForm = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(15)]],
      // lastName: '',
      // lastName: {value: 'n/a', disabled: true},
      email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
      phone: ['', Validators.pattern(this.regexPhone)],
      notification: 'email',
      sendCatalog: true
    });

    // this.signupForm = new FormGroup({
    //   firstName: new FormControl(),
    //   lastName: new FormControl(),
    //   email: new FormControl(),
    //   sendCatalog: new FormControl(true)
    // });
  }

  setNotification(notifyVia: string): void {
    const phoneControl = this.signupForm.get('phone');
    if (notifyVia === 'text') {
      document.getElementById('phoneRequired').innerHTML = '*';
      phoneControl.setValidators([Validators.required, Validators.pattern(this.regexPhone)]);
    } else {
      document.getElementById('phoneRequired').innerHTML = '';
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  save() {
    console.log(this.signupForm);
    console.log('Saved: ' + JSON.stringify(this.signupForm.value));
  }

  setValue(): void {
    document.getElementById('phoneRequired').innerHTML = '*';
    this.signupForm.setValue({
      firstName: 'Jack',
      lastName: 'Smith',
      email: 'jacksmith@gmail.com',
      phone: '07247110457',
      notification: 'text',
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
