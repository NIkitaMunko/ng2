import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('clickedDiv', [
      state('start', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px',
      })),
      state('end', style({
        backgroundColor: 'red',
        width: '300px',
        height: '300px',
      })),
      state('active', style({
        width: '170px',
        height: '170px',
        backgroundColor: 'orange',
      })),
      transition('start <=> end', animate('800ms ease-in')),
      transition('start => active', animate(400)),
      transition('active => end', animate(400)),
    ])
  ]
})
export class AppComponent {

  clickedDivState: string = 'start';

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start';
    }, 3000)
  }

}
