import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetfeedbackFormComponent } from './getfeedback-form/getfeedback-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GetfeedbackFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    GetfeedbackFormComponent
  ]
})
export class FeedbackFormModule { }
