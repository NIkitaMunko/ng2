import { Component } from '@angular/core';
import { CarsService } from './cars.service';
import {NgForOf} from "@angular/common";

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  imports: [
    NgForOf
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars: Cars[] = [];

  constructor(private carsService: CarsService) {}

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars: Cars[]) => {
        this.cars = cars;
      });
  }
}
