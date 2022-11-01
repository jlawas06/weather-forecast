import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.auth.user$.subscribe({
      next: (user) => {
        if (user) {
          this.router.navigateByUrl('/home');
        }
      },
    });
  }

  onLogin() {
    this.auth.loginWithRedirect()
  }

}
