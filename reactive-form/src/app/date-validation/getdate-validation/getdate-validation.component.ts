import { Component } from '@angular/core';
import { AbstractControl, AsyncValidator, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { dateValidation } from './enddate-validation'

@Component({
  selector: 'app-getdate-validation',
  templateUrl: './getdate-validation.component.html',
  styleUrls: ['./getdate-validation.component.scss']
})
export class GetdateValidationComponent {

  dateValidation: FormGroup

  constructor(private formBuilder: FormBuilder) {
    this.dateValidation = this.formBuilder.group({
      startDate: ['', [Validators.required]],
      endDate: ['', [Validators.required, dateValidation]]
    })
  }

  onSubmit() {
    if (this.dateValidation.valid) {
      console.log(this.dateValidation.value);
    }
    this.dateValidation.markAllAsTouched();
  }

  get startDate() {
    return this.dateValidation.get('startDate');
  }
  get endDate() {
    return this.dateValidation.get('endDate');
  }
}

