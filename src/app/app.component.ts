import {Component} from '@angular/core';
import {changeWithTrigger, divTrigger} from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [],
  animations: [divTrigger, changeWithTrigger]
})
export class AppComponent {
  title: string = "ang-vl-m";
}
