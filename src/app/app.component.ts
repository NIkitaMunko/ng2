import {Component} from '@angular/core';
import {BackgroundDirective} from './directives/background.directive';
import {NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    BackgroundDirective,
    NgForOf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  headerText = 'Создание новой директивы'
  items = [1, 2, 3, 4, 5];
  current = 1;

  onClick(number: number) {
    this.current = number;
  }
}
