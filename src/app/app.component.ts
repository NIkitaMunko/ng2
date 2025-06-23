import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-root',
    imports: [
        FormsModule,
        RouterOutlet,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './app.component.html',
  standalone: true,
})
export class AppComponent {

}
