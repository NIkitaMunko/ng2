import {Component} from '@angular/core';
import {PowPipe} from './pow.pipe';

@Component({
  selector: 'app-root',
  imports: [
    PowPipe
  ],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  template: `
    <div class="col-xs-8 col-xs-offset-2">
<!--      <h2>{{ name }}</h2>-->
<!--      <h2>{{ name | lowercase }}</h2>-->
<!--      <h2>{{ name | uppercase }}</h2>-->
<!--      <h2>{{ name | slice:0:3 }}</h2>-->
<!--      <h2>{{ name | slice:3:6 | uppercase }}</h2>-->
<!--      <hr>-->
<!--      <h2>{{ pi }}</h2>-->
<!--      <h2>{{ pi | number }}</h2>-->
<!--      <h2>{{ pi | number:'1.3-4' }}</h2>-->
<!--      <h2>{{ pi | number:'2.2-2' }}</h2>-->
<!--      <hr>-->
<!--      <h2>{{ money | currency:'USD':true }}</h2>-->
<!--      <hr>-->
<!--      <h2>{{ date }}</h2>-->
<!--      <h2>{{ date | date }}</h2>-->
<!--      <h2>{{ date | date:'fullDate' }}</h2>-->
<!--      <h2>{{ date | date:'shortDate' }}</h2>-->
<!--      <h2>{{ date | date:'shortTime' }}</h2>-->
<!--      <hr>-->
<!--      <h2>{{ amount }}</h2>-->
<!--      <h2>{{ amount | percent }}</h2>-->
<!--      <hr>-->
<!--      <h2>{{ object }}</h2>-->
<!--      <h2><pre>{{ object | json }}</pre></h2>-->
      <h2>{{ num }}</h2>
      <h2>{{ num | appPow:3:'=' }}</h2>
    </div>
  `
})
export class AppComponent {
  // headerText = 'Создание новой директивы'
  // items = [1, 2, 3, 4, 5];
  // current = 1;
  //
  // onClick(number: number) {
  //   this.current = number;
  // }

  // name = 'WebForMyself'
  // pi = Math.PI;
  // money = 350;
  // date = new Date();
  // amount = 0.45;
  // object = {
  //   foo: 'bar',
  //   baz: 'qux',
  //   nested :
  //     {
  //       xyz: 3,
  //       numbers: [1, 2, 3]
  //     }
  // }

  num = 2;
}
