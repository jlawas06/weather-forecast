import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onClickDisplayWeather(city: string) {
    if (city) {
      this.router.navigate(['/weather'], { queryParams: { q: city } });
    }
  }
}
