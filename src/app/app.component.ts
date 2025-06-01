import {Component} from '@angular/core';
import {CarsComponent} from './cars/cars.component';

@Component({
  selector: 'app-root',
  imports: [
    CarsComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng2-course-theory';
}
