import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  bgColor: string = 'red';
  generateColor(value: number): void {
    this.bgColor = `rgb(${value},${value},${value})`;
  }
}
