import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { AboutComponent } from './about/about.component';




@Component({
  moduleId: module.id,
  selector: 'portfolio-angular-app',
  templateUrl: 'portfolio-angular.component.html',
  styleUrls: ['portfolio-angular.component.css'],
  directives: [HeaderComponent, WeatherWidgetComponent, AboutComponent]
})
export class PortfolioAngularAppComponent {
  title = 'portfolio-angular works!';
}
