import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  bgColor = ""
  random_bg_color() {
    var x = Math.floor(Math.random() * 255);
    var y = Math.floor(Math.random() * 255);
    var z = Math.floor(Math.random() * 255);

    this.bgColor = "rgb(" + x + "," + y + "," + z + ")"; 
    console.log(this.bgColor)
    }
}
