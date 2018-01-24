import {Component, OnInit} from '@angular/core';

// REACTIVE FORM BUILDING BLOCKS
// FormGroup is used as a data type for form model. Root FormGroup is the form itself.
import {FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn} from '@angular/forms';

import {Customer} from '../customer';

function ratingRange(min: number, max: number): ValidatorFn {
  return (c: AbstractControl): { [key: string]: boolean } | null => {
    if (c.value !== undefined && (isNaN(c.value) || c.value < min || c.value > max)) {
      return {'range': true};
    }
    return null;
  };
}

// *** CROSS-FIELD VALIDATIONS ***

function emailMatcher(c: AbstractControl) {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');
  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }
  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return {'match': true};
}

function dateCompare(c: AbstractControl): { [key: string]: boolean } | null {
  const startControl = c.get('start');
  const endControl = c.get('end');
  if (startControl.pristine || endControl.pristine) {
    return null;
  }
  if (endControl.value < startControl.value) {
    return {'match': true};
  }
  console.log('Function works!');
  return null;
}

// *** CROSS-FIELD VALIDATIONS END ***

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form-reactive.component.html',
  styleUrls: ['./signup-form-reactive.component.scss']
})
export class SignupFormReactiveComponent implements OnInit {

  signupForm: FormGroup;
  customer: Customer = new Customer();
  // counties = [
  //   {code: 'BED', name: 'Bedfordshire'},
  //   {code: 'BER', name: 'Berkshire'},
  //   {code: 'BRI', name: 'Bristol'},
  //   {code: 'BUC', name: 'Buckinghamshire'},
  //   {code: 'CAM', name: 'Cambridgeshire'},
  //   {code: 'CHE', name: 'Cheshire'},
  //   {code: 'COR', name: 'Cornwall'},
  //   {code: 'COU', name: 'County Durham'},
  //   {code: 'DER', name: 'Derbyshire'},
  //   {code: 'DEV', name: 'Devon'},
  //   {code: 'DOR', name: 'Dorset'},
  //   {code: 'ESS', name: 'Essex'},
  //   {code: 'GLO', name: 'Gloucestershire'},
  //   {code: 'HAM', name: 'Hampshire'},
  //   {code: 'HER', name: 'Hertfordshire'},
  //   {code: 'HUN', name: 'Huntingdonshire'},
  //   {code: 'KEN', name: 'Kent'},
  //   {code: 'LAN', name: 'Lancashire'},
  //   {code: 'LEI', name: 'Leicestershire'},
  //   {code: 'LIN', name: 'Lincolnshire'},
  //   {code: 'MID', name: 'Middlesex'},
  //   {code: 'NOR', name: 'Norfolk'},
  //   {code: 'NOA', name: 'Northamptonshire'},
  //   {code: 'NOH', name: 'Northumberland'},
  //   {code: 'NOT', name: 'Nottinghamshire'},
  //   {code: 'OXF', name: 'Oxfordshire'},
  //   {code: 'SOM', name: 'Somerset'},
  //   {code: 'STA', name: 'Staffordshire'},
  //   {code: 'SUF', name: 'Suffolk'},
  //   {code: 'SUR', name: 'Surrey'},
  //   {code: 'SUS', name: 'Sussex'},
  //   {code: 'WAR', name: 'Warwickshire'},
  //   {code: 'WIL', name: 'Wiltshire'},
  //   {code: 'WOR', name: 'Worcestershire'},
  //   {code: 'YOR', name: 'Yorkshire'}
  // ];

  regexEmail = '^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';

  regexPhone = '^(?:(?:\\(?(?:0(?:0|11)\\)?[\\s-]?\\(?|\\+)44\\)?[\\s-]?(?:\\(?0\\)?[\\s-]?)?)|(?:\\(?0))(?:(?:\\d{5}\\)?[\\s-]?\\d{4,5})|(?:\\d{4}\\)?[\\s-]?(?:\\d{5}|\\d{3}[\\s-]?\\d{3}))|(?:\\d{3}\\)?[\\s-]?\\d{3}[\\s-]?\\d{3,4})|(?:\\d{2}\\)?[\\s-]?\\d{4}[\\s-]?\\d{4}))(?:[\\s-]?(?:x|ext\\.?|\\#)\\d{3,4})?$';

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {

    document.getElementById('phoneRequired').innerHTML = '';
    this.setValuesInit();

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

  setValuesInit() {
    // Root FormGroup initialisation
    this.signupForm = this._formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(15)]],
      emailGroup: this._formBuilder.group({
        email: ['', [Validators.required, Validators.pattern(this.regexEmail)]],
        confirmEmail: ['', [Validators.required]]
      }, {validator: emailMatcher}),
      availability: this._formBuilder.group({
        start: ['', Validators.required],
        end: ['', Validators.required]
      }, {validator: dateCompare}),
      notification: 'email',
      phone: ['', Validators.pattern(this.regexPhone)],
      rating: ['', ratingRange(1, 5)],
      sendCatalog: true
    });
  }

  setValue(): void {
    document.getElementById('phoneRequired').innerHTML = '*';
    this.signupForm.setValue({
      firstName: 'Jack',
      lastName: 'Smith',
      emailGroup: {
        email: '',
        confirmEmail: ''
      },
      availability: {
        start: '',
        end: ''
      },
      phone: '07247110457',
      rating: '',
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
