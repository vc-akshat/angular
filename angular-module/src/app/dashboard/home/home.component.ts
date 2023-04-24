import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  bgColor = 'red';

  generateColor(value: string): void {
    this.bgColor = `rgb(${value})`;
  }
}
