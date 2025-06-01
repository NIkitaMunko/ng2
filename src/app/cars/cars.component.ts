import {Component} from '@angular/core';
import {CarComponent} from '../car/car.component';
import {FormsModule} from '@angular/forms';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-cars',
  imports: [
    CarComponent,
    FormsModule,
    NgIf,
    NgForOf,
    NgStyle,
    NgClass
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  carName: string = '';
  addCarStatus: boolean = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently']

  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  setBigCarText(car: string) {
    return car.length > 4;
  }

}
