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
  <div>
    <p>Your Location: {{userLocation}}</p>
  </div>
  <div>
    <p> Local temp: {{selectedTemp}} °C</p>
  </div>
  <div class="inline-div">
    <p> Local weather: {{selectedDescription}} </p>
  </div>
  <div class="centered" *ngIf="selectedIcon != null">
  <img src="http://openweathermap.org/img/w/{{selectedIcon}}.png" alt="Description"/>
  </div>
    <div *ngIf="selectedIcon == null">
  <p>Icon loading...</p>
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
  public selectedTemp: string;
  public selectedDescription: string;
  public selectedIcon: string;
  public userLocation: string;


  constructor(private _ngLocation: nglocationService) {
    _ngLocation.getCitydata();
    EmitterService.get("tempService").subscribe(data =>{
       this.selectedTemp = data.main.temp;
       this.selectedDescription = data.weather[0].description;
       this.selectedIcon = data.weather[0].icon;
    });
    EmitterService.get("locationService").subscribe(data2 =>{
       this.userLocation = data2;
    });
  }

  

  ngOnInit(){
    
  }
}
