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
    ]),
    trigger('multi', [
      state('start', style({
        width: '150px',
        height: '150px',
        border: '5px solid black',
      })),
      state('end', style({
        width: '170px',
        height: '170px',
        backgroundColor: 'blue',
      })),
      transition('start <=> end', [
        style({
          backgroundColor: 'red',
        }),
        animate(1500, style({
          backgroundColor: 'yellow',
        })),
        animate(1000)
      ]),
    ])
  ]
})
export class AppComponent {

  clickedDivState: string = 'start';
  multiState: string = 'start';

  changeDivState() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start';
    }, 3000)
  }

}
