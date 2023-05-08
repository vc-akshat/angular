import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms'

@Component({
  selector: 'app-confirm-password-validation',
  templateUrl: './confirm-password-validation.component.html',
  styleUrls: ['./confirm-password-validation.component.scss']
})

export class ConfirmPasswordValidationComponent {

  passwordValidation : FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.passwordValidation = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required, matchPasswordValidation]],
    })
  }

  onSubmit() {
    console.log(this.passwordValidation.value);
  }

  get fullName() {
    return this.passwordValidation.get('fullName');
  }
  get Email() {
    return this.passwordValidation.get('Email');
  }
  get password() {
    return this.passwordValidation.get('password');
  }
  get confirmPassword() {
    return this.passwordValidation.get('confirmPassword');
  }

}
export function matchPasswordValidation(control: AbstractControl): ValidationErrors | null {
  const password = control.parent?.value.password;
  const confirmPassword = control.value;
  
  return password == confirmPassword ? null : { valid: true };
}
