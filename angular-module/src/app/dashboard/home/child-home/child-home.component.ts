import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.scss']
})
export class ChildHomeComponent {

  @Input() color?: string;  

  @Output() newColorEvent = new EventEmitter<string>();

  addRandomColor(): void {
    let value = this.generateRandomColor();
    console.log(value);
    this.newColorEvent.emit(value);
  }

  generateRandomColor(): string {

    const a = `${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`;
    return a;

    // return Math.floor(Math.random() * 255);
  }
}
