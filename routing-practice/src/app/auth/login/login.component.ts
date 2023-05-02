import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface userData {
  id: number;
  name: string;
  age: number
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private route: Router) { }

  userData: userData[] = [
    {id: 1, name: "Akshat", age: 23},
    {id: 2, name: "Mohan", age: 35},
    {id: 3, name: "Raman", age: 50}
  ]

  click(user: userData): void {
    this.route.navigate(['login','register',user.id, user.name, user.age]);
  }
}
