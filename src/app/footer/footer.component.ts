import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-footer',
  template: `
  <footer>
  <p>Created in 2016 with Angular2</p>
  </footer>
  `,
  styles: [`
p{
  text-align: center;
  font-size: 75%;
}

  `]
})
export class FooterComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
