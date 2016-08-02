import { Component, Directive, OnInit, ElementRef } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {
	itsHidden:boolean = true;

}
