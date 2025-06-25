import { Component, OnInit } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  imports: [
    NgIf
  ],
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  isCarVisible = true;
  title = 'My car header';

  constructor() { }

  ngOnInit() {
  }

}
