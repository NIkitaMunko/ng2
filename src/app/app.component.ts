import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {JsonPipe, NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    NgClass,
    JsonPipe,
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

  defaultAnswer  = "no";
  defaultCountry = "ua";

  formData = {};
  isSubmited = false;

  addRandEmail() {
    const randEmail = "asd@gmail.com"
    this.form.form.patchValue({
      user: {
        email: randEmail,
      }
    });
  }

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset();
  }
}
