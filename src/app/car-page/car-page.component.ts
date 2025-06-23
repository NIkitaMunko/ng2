import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, RouterLink} from '@angular/router';

@Component({
  selector: 'app-car-page',
  imports: [
    RouterLink
  ],
  templateUrl: './car-page.component.html',
  styleUrl: './car-page.component.css'
})
export class CarPageComponent implements OnInit {

  id: number = 0;
  name: string = '';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
        this.id = +this.route.snapshot.params['id'];
        this.name = this.route.snapshot.params['name'];

        this.route.params.subscribe((params: Params) => {
          this.id = +params['id'];
          this.name = params['name'];
        })
    }

}
