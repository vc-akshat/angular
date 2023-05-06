import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutFormModule } from './checkout-form/checkout-form.module';
import { FeedbackFormModule } from './feedback-form/feedback-form.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CheckoutFormModule,
    FeedbackFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
