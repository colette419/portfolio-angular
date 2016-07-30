import { Component, Directive, OnInit, ElementRef } from '@angular/core';
import { AnimationBuilder } from 'css-animator/builder';


@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
	itsHidden:boolean = true;

}
