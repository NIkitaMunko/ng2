import {RouterModule, Routes} from '@angular/router';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {HomePageComponent} from './home-page/home-page.component';
import {NgModule} from '@angular/core';
import {CarPageComponent} from './car-page/car-page.component';
import {NotFountComponent} from './not-fount/not-fount.component';

export const routes: Routes = [
  {path: 'cars', component: CarsPageComponent, children: [
      {path: ':id/:name', component: CarPageComponent},
    ]},
  {path: '', component: HomePageComponent},
  {path: 'not-found', component: NotFountComponent},
  {path: '**', redirectTo: '/not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes {
}
