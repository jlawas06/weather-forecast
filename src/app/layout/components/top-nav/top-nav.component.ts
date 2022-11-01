import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit {
  @Input() isAuthenticated: boolean | null = false;
  @Output() logoutClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onLogout(){
    this.logoutClicked.emit();
  }
}
