import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {changeWithTrigger, divTrigger} from './app.animations';

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
}
