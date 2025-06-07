import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CarComponent} from '../car/car.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-cars',
  imports: [
    FormsModule,
    CarComponent,
    NgForOf,
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  carName: string = '';
  carYear: number = 2017;

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

  addCar() {
    this.cars.push({
      name: this.carName,
      year: this.carYear,
    });
    this.carName = '';
    this.carYear = 2017
  }

}
