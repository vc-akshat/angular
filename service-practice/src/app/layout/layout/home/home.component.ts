import { Component, OnInit } from '@angular/core';
import { LoggerServiceService } from 'src/app/core/services/logger-service.service'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private logger: LoggerServiceService) {}

  ngOnInit() { 
    this.logger.log('hello');
  }

}