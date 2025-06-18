import { Component } from '@angular/core';
import { CarsService } from './cars.service';
import {NgForOf} from "@angular/common";
import {FormsModule} from '@angular/forms';

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  imports: [
    NgForOf,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {
  cars: Cars[] = [];
  carName: string = '';

  constructor(private carsService: CarsService) {}

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars: Cars[]) => {
        this.cars = cars;
      });
  }

  addCar() {
    this.carsService
      .addCar(this.carName)
      .subscribe((car: Cars) => {
        this.cars.push(car);
      });
    this.carName = '';
  }
}
