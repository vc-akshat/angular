import { Component, Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.scss']
})
export class ChildHomeComponent {

  @Input() color: string = 'red';

  @Output() newColorEvent = new EventEmitter<number>();

  addRandomColor(): void {
    let value = this.generateRandomColor()
    console.log(value);
    this.newColorEvent.emit(value);
  }

  generateRandomColor():number {
    return Math.floor(Math.random() * 255);
  }
}
