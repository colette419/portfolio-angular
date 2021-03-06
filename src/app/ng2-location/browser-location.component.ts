import {Component,OnInit, Injectable} from '@angular/core';
import {Location} from './location-interface';
import {nglocationService} from './browser-location-service';
import {EventEmitter} from '@angular/core';

/**
 * The EmitterServicefor class broadcasting the selected city name.
 * @Injectable class is injectable to other components and services
 * @class EmitterService
 * @constructor
 **/

@Injectable()
export class EmitterService {
  /**
    * The _emitters attribute is a EventEmitter used to braodcast selected city name.
    *
    * @attribute _emitters
    * @type {any}
    * @private
    */
  private static _emitters: {
  /**
      * The channel property is used to store selected city name.
      *
      * @property channel
      * @type {string}
      * @reference {EventEmitter}
      *
      */
    [channel: string]: EventEmitter<any> } = {};

  /**
     * Returns selected city name if property '_emitters[channel]' exixts
     *
     * @method get
     * @static
     * @params channel
     * @return {Object} _emitters
     */

  static get(channel: string): EventEmitter<any> {
    if (!this._emitters[channel])
      this._emitters[channel] = new EventEmitter();
    return this._emitters[channel];
  }
}
/**
 * A component that acts as a top level container for an browser-location component.
 * @selector ngLocation
 * @provider nglocationService
 */
@Component({
  moduleId: module.id,
  selector: 'ngLocation',
  template:
  `
  <div *ngIf="weatherLocation == 'Tahiti'">
    <p>Since your geolocation is not working (or turned off), please enjoy viewing the current weather in Tahiti:</p>
    
  <div *ngIf="tempUnits == 'Celsius'">
    <p> Local temp: {{selectedTempC}} <span class="selectedTemp">°C</span>/<span class="unselectedTemp" (click)="tempUnits='Fahrenheit'" >°F</span></p>
  </div>

  <div *ngIf="tempUnits == 'Fahrenheit'">
    <p> Local temp: {{selectedTempF}} <span class="unselectedTemp" (click)="tempUnits='Celsius'">°C</span>/<span class="selectedTemp">°F</span></p>
  </div>


    <div class="inline-div">
      <p> Weather: {{selectedDescription}} </p>
    </div>
    <div class="centered" *ngIf="selectedIcon != null">
      <img src="{{selectedIcon}}" alt="Description"/>
    </div>
    <div *ngIf="selectedIcon == null">
      <p>Icon loading...</p>
    </div>
    <img id="wulogo" src="https://icons.wxug.com/logos/JPG/wundergroundLogo_4c_horz.jpg">
  </div>
  
  <div *ngIf="weatherLocation != 'Tahiti'">
    <p>Your Location: {{weatherLocation}}</p>
  

  <div *ngIf="tempUnits == 'Celsius'">
    <p> Local temp: {{selectedTempC}} <span class="selectedTemp">°C</span>/<span class="unselectedTemp" (click)="tempUnits='Fahrenheit'" >°F</span></p>
  </div>

  <div *ngIf="tempUnits == 'Fahrenheit'">
    <p> Local temp: {{selectedTempF}} <span class="unselectedTemp" (click)="tempUnits='Celsius'">°C</span>/<span class="selectedTemp">°F</span></p>
  </div>
  

  <div class="inline-div">
    <p> Local weather: {{selectedDescription}} </p>
  </div>
  <div class="centered" *ngIf="selectedIcon != null">
    <img src="{{selectedIcon}}" alt="Description"/>
  </div>
    <div *ngIf="selectedIcon == null">
      <p>Icon loading...</p>
    </div>
  <img id="wulogo" src="https://icons.wxug.com/logos/JPG/wundergroundLogo_4c_horz.jpg">
  </div>
  `,
  styleUrls: ['browser-location.component.css'],
  providers: [nglocationService],
  directives:[]
})

/**
 *
 * @class ngSelectLocation
 * @implements OnInit
 *
 **/

export class ngSelectLocation implements OnInit {
  /**
      * The selectedCity property is used to show the current city name.
      *
      * @property selectedCity
      * @type {string}
      *
      */
  public selectedTempC: string;
  public selectedTempF: string;
  public selectedDescription: string;
  public selectedIcon: string;
  // public userLocation: string;
  public weatherLocation: string;

  tempUnits:string = 'Celsius';


  constructor(private _ngLocation: nglocationService) {
    _ngLocation.getCitydata();
    EmitterService.get("tempService").subscribe(data =>{
       this.selectedTempC = data.current_observation.temp_c;
       this.selectedTempF = data.current_observation.temp_f;
       this.selectedDescription = data.current_observation.weather;
       this.selectedIcon = data.current_observation.icon_url;
       this.weatherLocation = data.current_observation.display_location.city;
    });
    // EmitterService.get("locationService").subscribe(data2 =>{
    //    this.userLocation = data2;
    // });
  }

  

  ngOnInit(){
    
  }
}
