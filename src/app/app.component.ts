import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    NgClass,
  ],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
})
export class AppComponent {

  @ViewChild('form') form!: NgForm;

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }]

  submitForm() {
    console.log('Submitted!', this.form);
  }
}
