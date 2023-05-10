import { Component } from '@angular/core';
import { LoggerServiceService } from 'src/app/core/services/logger-service.service'; 


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  constructor(private logger: LoggerServiceService) { }

  set(): void {
    this.logger.log('good morning');
  }
}
