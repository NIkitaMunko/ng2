  import { Routes } from '@angular/router';
  import {CarsPageComponent} from './cars-page/cars-page.component';
  import { HomePageComponent } from './home-page/home-page.component';

export const routes: Routes = [
  // localhost:4200/cars
  { path: 'cars', component: CarsPageComponent },
  { path: '', component: HomePageComponent },
];
