import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-checkout-field',
  templateUrl: './checkout-field.component.html',
  styleUrls: ['./checkout-field.component.scss']
})
export class CheckoutFieldComponent {

  contactForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userEmail: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    creditCardNumber: new FormControl(null, [Validators.required, Validators.minLength(13), Validators.maxLength(16) ,Validators.pattern('^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$')]),
    expirationYear: new FormControl('2023-05', [Validators.required]),
    cvvNumber: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]{3}')]),
  })

  get userName() {
    return this.contactForm.get('userName');
  }
  get userEmail() {
    return this.contactForm.get('userEmail');
  }
  get address() {
    return this.contactForm.get('address');
  }
  get creditCardNumber() {
    return this.contactForm.get('creditCardNumber');
  }
  get expirationMonth() {
    return this.contactForm.get('expirationMonth');
  }
  get expirationYear() {
    return this.contactForm.get('expirationYear');
  }
  get cvvNumber() {
    return this.contactForm.get('cvvNumber');
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      // this.contactForm.markAllAsTouched();
      console.log('bullshit');
      return;
    }
    console.log(this.contactForm.value);
  }
}
