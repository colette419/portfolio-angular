import { Component, Directive, OnInit, ElementRef } from '@angular/core';
import { AnimationBuilder } from 'css-animator/builder';


@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css'],
  directives : [AnimateBox]
})
export class AboutComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  descHide() {
  	console.log("Hi Colette!");
  }



}

///////////////////////////////////

@Directive({
  selector : '[animate-box]',
  host : {
    '[style.background-color]' : "'red'"
  },
  exportAs : 'ab'
})
class AnimateBox {
  constructor(private _ab: AnimationBuilder, private _e: ElementRef) {}
  
  toggle(isVisible: boolean = false) {
    let animation = this._ab.css();
    animation
      .setDuration(1000);
    
    if(!isVisible) { // Goes up!
      animation.setFromStyles({height: '0', width: '50%', overflow: 'hidden'})
               .setToStyles({height: '300px'})
    } else { // Goes down!
      animation.setFromStyles({height: '300px', width: '50%'})
               .setToStyles({height: '0'})
    }
    animation.start(this._e.nativeElement);
  }
}
