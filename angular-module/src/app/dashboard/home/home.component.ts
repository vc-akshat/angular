import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  bgColor?: string;
  random_bg_color() {
    this.bgColor = "rgb(" + this.random_color() + "," + this.random_color()  + "," + this.random_color()  + ")"; 
    }

    random_color(){
      return Math.floor(Math.random() * 255);
    }

    name = "";
    username = "akshat";

}
