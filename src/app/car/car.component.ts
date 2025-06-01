import { Component } from '@angular/core';

@Component({
  selector: 'app-car',
  imports: [],
  templateUrl: './car.component.html',
  // template: `
  //   <h1>Single car</h1>
  //   <p>Lorem10</p>
  // `,
  styleUrl: './car.component.css'
  // styles: [`
  //   h1 {
  //     color: aqua;
  //   }
  // `]
})
export class CarComponent {
  carName: string = "Ford";
  carYear: number = 2017;

  getName() {
    return this.carName;
  }
}
