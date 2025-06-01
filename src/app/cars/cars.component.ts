import {Component} from '@angular/core';
import {CarComponent} from '../car/car.component';

@Component({
  selector: 'app-cars',
  imports: [
    CarComponent
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  addCarStatus: string = '';
  inputText: string = '';

  constructor() {
  }

  addCar() {
    this.addCarStatus = 'Машина добавлена'
  }

  onKeyUp(event: Event) {
    // console.log(event.)
  }

}
