import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-cars-page',
  templateUrl: './cars-page.component.html',
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./cars-page.component.css']
})
export class CarsPageComponent implements OnInit {
  cars: any[] = [];

  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.cars = this.carsService.cars;
  }

}
