import {Component, ViewEncapsulation} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CarComponent} from '../car/car.component';
import {NgForOf} from '@angular/common';
import {AddCarComponent} from '../add-car/add-car.component';

@Component({
  selector: 'app-cars',
  imports: [
    FormsModule,
    CarComponent,
    NgForOf,
    AddCarComponent,
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
  // encapsulation: ViewEncapsulation.None
})
export class CarsComponent {

  cars: {name: string, year: number}[] = [{
    name: 'Ford',
    year: 2015
  }, {
    name: 'Mazda',
    year: 2010
  }, {
    name: 'Audi',
    year: 2017
  }];

  constructor() {
  }

  updateCarList(car: {name: string, year: number}) {
    this.cars.push(car);
  }

}
