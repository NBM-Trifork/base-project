import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  user: User | null = null;
  
  @Input()
  backgroundColor?: string;

  @Output()
  onLogin = new EventEmitter<Event>();

  @Output()
  onLogout = new EventEmitter<Event>();

  @Output()
  onCreateAccount = new EventEmitter<Event>();

  public title = "Trifork";
  constructor() { }

  ngOnInit(): void {
  }

}
