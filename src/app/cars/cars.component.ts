import {Component} from '@angular/core';
import {CarComponent} from '../car/car.component';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cars',
  imports: [
    CarComponent,
    FormsModule
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

  addCarStatus: string = '';
  inputText: string = 'Default text';

  constructor() {
  }

  addCar() {
    this.addCarStatus = 'Машина добавлена'
  }

  onKeyUp(event: Event) {
    // console.log(event.)
  }

}
