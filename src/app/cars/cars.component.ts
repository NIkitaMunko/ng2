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

  canAddCar: boolean = false;

  constructor() {
    setTimeout(() => {
      this.canAddCar = true;
    }, 4000);
  }

}
