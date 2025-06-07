import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
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

  @Output('onAddCar') carEmitter = new EventEmitter<{name: string, year: number}>();

  addCar(carNameEl: HTMLInputElement, carYearInput: HTMLInputElement): void {
    this.carEmitter.emit({
      name: carNameEl.value,
      year: +carYearInput.value,
    })

    carNameEl.value = '';
    carYearInput.value = '2017';
  }

}
