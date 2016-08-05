import { Component, OnInit } from '@angular/core';
import  { Observable } from "rxjs/Rx";


@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

 
// message = '';
//   constructor() {
//     var text='Hello visitor! Please check out the information below to get to know a little more about me...';
  
//     Observable.interval(100)
//               .take(text.length).map((x) => x+1)
//               .subscribe((x) => {
//                 this.message += text[x-1];
//               });

//   }


    // ticks = 0;
  ngOnInit(){
    // let timer = Observable.timer(2000,1000);
    // timer.subscribe(t=>this.ticks = t);
    // this.typewriterBlurb();
  }

  

  
//*******************************************************************************************************************************
//DO NOT CHANGE THE FUNCTION BELOW; IT WORKS PERFECTLY IN THE CONSOLE
//*******************************************************************************************************************************
    

   typewriterBlurb() {
     let typewriter = '';
     let text = 'Hello visitor! Please check out the information below to get to know a little more about me...';
      for (var i = 0; i < text.length; i++) {
    setTimeout(function(x) { 
      return function() {
        typewriter += text[x];
        console.log(typewriter); 
        return typewriter;
      }; 
    } (i), 100*i);
}
}

//****************************************************************

}



//  typewriterBlurb() {
//    console.log("hi!");
//   	// alert("Colette is the greatest");
//   	let text = 'Hello visitor! Please check out the information below to get to know a little more about me...';
// setTimeout(function() {
//   console.log('hi1');
//   	for (var i of text) {
//     this.blurb += i;
//     this.counter += 1;
//     } 
//   }, 1000 * this.counter);
// return 
//   };
// }






    // $.each(text.split(''), function(i, letter) {
    //     setTimeout(function() {
    //         //we add the letter to the container
    //         $('#top-blurb').html($('#top-blurb').html() + letter);

    //     }, 100 * i);
    // });

 // typewriterBlurb() {
 //    let text = 'Hello visitor! Please check out the information below to get to know a little more about me...';








