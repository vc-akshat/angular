import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetdateValidationComponent } from './getdate-validation/getdate-validation.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GetdateValidationComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    GetdateValidationComponent
  ]
})
export class DateValidationModule { }
