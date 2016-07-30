import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';




@Component({
  moduleId: module.id,
  selector: 'portfolio-angular-app',
  templateUrl: 'portfolio-angular.component.html',
  styleUrls: ['portfolio-angular.component.css'],
  directives: [HeaderComponent, WeatherWidgetComponent, AboutComponent, ResumeComponent, PortfolioComponent, ContactComponent]
})
export class PortfolioAngularAppComponent {
  title = 'portfolio-angular works!';
}
