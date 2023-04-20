import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  bgColor: string = "";
  random_bg_color() {
    const x = Math.floor(Math.random() * 255);
    const y = Math.floor(Math.random() * 255);
    const z = Math.floor(Math.random() * 255);

    this.bgColor = "rgb(" + x + "," + y + "," + z + ")"; 
    }

    name = ""

}
