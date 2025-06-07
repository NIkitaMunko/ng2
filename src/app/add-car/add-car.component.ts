import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-car',
    imports: [
        FormsModule
    ],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {

  carName: string = '';
  carYear: number = 2017;
  @Output('onAddCar') carEmitter = new EventEmitter<{name: string, year: number}>();

  addCar() {
    this.carEmitter.emit({
      name: this.carName,
      year: this.carYear
    })

    this.carName = '';
    this.carYear = 2017
  }

}
