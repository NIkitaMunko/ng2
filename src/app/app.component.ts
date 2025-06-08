import {Component} from '@angular/core';
import {BackgroundDirective} from './directives/background.directive';

@Component({
  selector: 'app-root',
  imports: [
    BackgroundDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  headerText = 'Создание новой директивы'
}
