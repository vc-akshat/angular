import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-forms';
 
  mobile?:number
  onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
  }
}
 