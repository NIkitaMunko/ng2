import {Component} from '@angular/core';
import {CarComponent} from '../car/car.component';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-cars',
  imports: [
    CarComponent,
    FormsModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  carName: string = '';
  addCarStatus: boolean = false;
  cars = ['Ford', 'Audi', 'BMW']
  items = [{id : 3, name : 'item 1'}, {id : 6, name : 'item 2'}, {id : 9, name : 'item 3'}];

  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

}
