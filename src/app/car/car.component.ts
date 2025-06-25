import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  imports: [
    NgIf
  ],
  providers: [CarService]
})
export class CarComponent implements OnInit {

  isCarVisible: boolean = true;
  title = 'My car header';

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.isCarVisible = this.carService.getVisibility();
  }

}
