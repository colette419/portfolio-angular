import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-resume',
  templateUrl: 'resume.component.html',
  styleUrls: ['resume.component.css']
})
export class ResumeComponent implements OnInit {
	itsHidden:boolean = true;

  constructor() {}

  ngOnInit() {
  }

}
