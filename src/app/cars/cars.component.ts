import {Component} from '@angular/core';
import {CarComponent} from '../car/car.component';
import {FormsModule} from '@angular/forms';
import {DatePipe, NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-cars',
  imports: [
    CarComponent,
    FormsModule,
    NgIf,
    NgForOf,
    NgStyle,
    NgClass,
    DatePipe
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  carName: string = '';
  addCarStatus: boolean = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently']
  dates = [
    new Date(2015, 3, 4),
    new Date(2011, 4, 4),
    new Date(2017, 5, 4),
    new Date(2010, 7, 4),
  ];

  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

}
