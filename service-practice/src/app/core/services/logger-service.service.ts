import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UserData {
  userId: number,
  id: number,
  title: string,
  body: string,
}

@Injectable({
  providedIn: 'root'
})
export class LoggerServiceService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getApi(id: string): Observable<UserData> {
    const params = new HttpParams().set('id', id);
    const headers = new HttpHeaders().set('Authorization','good');
    return this.http.get<UserData>(this.url, { params, headers });
  }
}