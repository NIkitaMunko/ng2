import {Component, Input} from '@angular/core';

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
  @Input('carItem') car!: { name: string; year: number };
}

