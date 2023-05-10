import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoggerServiceService {

  constructor(private http: HttpClient) {}

  log(temperory: string): void {
    console.log(`${temperory} akshat`);
  }
}
