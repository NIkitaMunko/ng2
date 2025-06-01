import { Component } from '@angular/core';
import {MyComponent} from './my/my.component';
import {My2Component} from './my2/my2.component';

@Component({
  selector: 'app-root',
  imports: [
    MyComponent,
    My2Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng2-course-theory';
}
