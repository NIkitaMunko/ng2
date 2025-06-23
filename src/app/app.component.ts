import {Component, OnInit} from '@angular/core';
import { CarsService } from './cars.service';
import {AsyncPipe, NgForOf, NgStyle} from "@angular/common";
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
    NgStyle,
    AsyncPipe,
  ],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent implements OnInit {
  colors = [
    'red',
    'blue',
    'green',
    'pink',
    'yellow',
    'grey'
  ];
  cars: Cars[] = [];
  carName: string = '';
  appTitle: any;

  constructor(private carsService: CarsService) {}

  ngOnInit(): void {
        this.appTitle = this.carsService.getAppTitle();
  }

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

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsService.changeColor(car, this.getRandColor())
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteCar(car: Cars) {
    this.carsService.deleteCar(car)
      .subscribe(() => {
        this.cars = this.cars.filter(c => c.id !== car.id);
      })
  }
}
