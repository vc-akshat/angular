import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutFormModule } from './checkout-form/checkout-form.module';
import { FeedbackFormModule } from './feedback-form/feedback-form.module';
import { PasswordValidationModule } from './password-validation/password-validation.module';
import { DateValidationModule } from './date-validation/date-validation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CheckoutFormModule,
    FeedbackFormModule,
    PasswordValidationModule,
    DateValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
