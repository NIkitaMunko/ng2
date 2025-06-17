import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        NgForOf
    ],
    templateUrl: './app.component.html'
})
export class AppComponent    {
    cars = [
        {
            name: 'Ford',
            color: 'white',
            id: 1
        }
    ];
}
