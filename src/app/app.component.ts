import {Component, ViewChild} from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    NgForOf,
  ],
  templateUrl: './app.component.html',
  // styleUrl: './app.component.css',
  styles: [`
  input.ng-invalid.ng-touched {
    border: 1px solid red;
  }`]
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
