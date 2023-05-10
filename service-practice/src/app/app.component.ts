import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'service-practice';

  constructor (private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      console.log(data);
    });
  }
}
