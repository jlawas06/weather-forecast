import { Component, Input, OnInit } from '@angular/core';
import { User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() user: User | undefined | null;
  constructor() { }

  ngOnInit(): void {
  }
  
  formatLink(username: string) {
    return 'https://github.com/' + username;
  }
}
