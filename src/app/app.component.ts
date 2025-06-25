import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {changeWithTrigger, divTrigger} from './app.animations';
import {AnimationEvent} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [
    NgIf
  ],
  animations: [divTrigger, changeWithTrigger]
})
export class AppComponent {
  isVisible: boolean = false;

  onAnimationStart(event: AnimationEvent) {
    console.log('animation start', event);
  }

  onAnimationDone(event: AnimationEvent) {
    console.log('animation done', event);
  }
}
