import {Component, OnInit} from '@angular/core';
import {Employee} from '../models/employee.model';
import { HttpClient } from '@angular/common/http';
import {FormPosterService} from '../services/form-poster.service';
import {NgForm, FormControl, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  selectedValue: string;
  model = new Employee('', '', '', true, '', 'default');
  hasLanguageError = false;
  submitted: boolean;

  payments = [
    'W1',
    'W2',
    'T1',
    'T2',
  ];

  paymentType: string;
  languageControl = new FormControl('', [Validators.required]);
  languages = [];

  constructor(
    private formPosterService: FormPosterService,
    private http: HttpClient) {
    this.formPosterService.getLanguages()
      .subscribe(
        data => this.languages = data.languages,
        err => console.log('get error: ', err)
      );
  }

  ngOnInit() {
    this.submitted = false;
    this.hasLanguageError = true;
  }

  submitForm(form: NgForm) {

    this.submitted = true;

    // validate form
    this.validateLanguage(this.model.language);
    if (this.hasLanguageError) {
      return;
    } else {
    }

    // Call model
    this.formPosterService.postEmployeeForm(this.model)
      .subscribe(
        data => console.log('Success: ', data),
        err => console.log('Error: ', err)
      )

  }

  backToForm() {
    this.submitted = false;
  }

  validateLanguage(value) {
    if (value === 'default') {
      this.hasLanguageError = true;
    } else {
      this.hasLanguageError = false;
    }
    // console.log(this.hasLanguageError);
  }

}
