import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmPasswordValidationComponent } from './confirm-password-validation/confirm-password-validation.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConfirmPasswordValidationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ConfirmPasswordValidationComponent
  ]
})
export class PasswordValidationModule { }
