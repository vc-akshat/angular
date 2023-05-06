import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutFieldComponent } from './checkout-field/checkout-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';


@NgModule({
  declarations: [
    CheckoutFieldComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ],
  exports: [
    CheckoutFieldComponent
  ]
})
export class CheckoutFormModule { }
