import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface userData {
  id: number,
  name: string,
  age: number,
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  userData = [
    {
      id: 1, name: "anshan", age: 23
    }
  ];

  onSubmit(submitForm: userData) {
    localStorage.setItem("userData", JSON.stringify(this.userData));
    console.log(submitForm);
    this.userData.push(submitForm);
  }
}
