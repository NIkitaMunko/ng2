import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [AuthService]
})
export class HomePageComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

  openCarsPage() {
    this.router.navigate(['/cars'], {relativeTo: this.route});
  }

  changeAuthStatus(status: string) {
    if (status === 'login') {
      this.auth.logIn();
    } else {
      this.auth.logOut();
    }
  }

}
