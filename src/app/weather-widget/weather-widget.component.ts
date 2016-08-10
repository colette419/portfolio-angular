import { Component, OnInit } from '@angular/core';
import { ngSelectLocation, EmitterService } from '../ng2-location/browser-location.component';


@Component({
  moduleId: module.id,
  selector: 'app-weather-widget',
  template: `
  <ngLocation></ngLocation>
  `,
  directives: [ngSelectLocation],
  providers: [EmitterService]
})

export class WeatherWidgetComponent implements OnInit {
   public selectedCity:any;
 
 constructor(private EmitterService: EmitterService) {
 window.localStorage.removeItem('city');
}

ngOnInit(){
 this.selectedCity = localStorage.getItem('city');
 EmitterService.get('selectedCity').subscribe(data => {
 this.selectedCity = data;
 localStorage.setItem('city', data);
 });
 }
}
