import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-getfeedback-form',
  templateUrl: './getfeedback-form.component.html',
  styleUrls: ['./getfeedback-form.component.scss']
})
export class GetfeedbackFormComponent {

  feedbackValidation: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.feedbackValidation = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      Email: ['', [Validators.required, Validators.email]],
      rating: ['', [Validators.required]],
      comments: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if (this.feedbackValidation.valid) {
      console.log(this.feedbackValidation.value);
    }
    this.feedbackValidation.markAllAsTouched();
  }

  get firstName() {
    return this.feedbackValidation.get('firstName');
  }
  get Email() {
    return this.feedbackValidation.get('Email');
  }
  get rating() {
    return this.feedbackValidation.get('rating');
  }
  get comments() {
    return this.feedbackValidation.get('comments');
  }
}
