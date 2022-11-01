import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(public auth: AuthService, @Inject(DOCUMENT) private document: Document,) { }

  ngOnInit(): void {
  }

  onLogout() {
    this.auth.logout({
      returnTo: document.location.origin
    });
  }
}
