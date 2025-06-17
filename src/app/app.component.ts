import { Component } from '@angular/core';
import { CarsService } from './cars.service';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [
    NgForOf
  ],
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars = [];

  constructor(private carsService: CarsService) {}

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((response: any) => {
        console.log(response);
      });
  }
}
