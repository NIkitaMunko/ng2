import {Component} from '@angular/core';
import {CarComponent} from '../car/car.component';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-cars',
  imports: [
    CarComponent,
    FormsModule,
    NgIf
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  carName: string = '';
  addCarStatus: boolean = false;

  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
  }

}
