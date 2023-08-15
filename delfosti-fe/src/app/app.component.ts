import { Component } from '@angular/core';
import { UrlService } from './services/url.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'delfosti-fe';
  inHome: boolean = true;

  constructor(
    private urlService: UrlService,
  ) {
    this.urlService.inHome$.subscribe((value) => (this.inHome = value));
  }
}
