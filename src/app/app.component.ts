import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HomePageComponent} from './home-page/home-page.component';
import {CarsPageComponent} from './cars-page/cars-page.component';
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
    imports: [
        FormsModule,
        HomePageComponent,
        CarsPageComponent,
        RouterOutlet,
    ],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {

}
