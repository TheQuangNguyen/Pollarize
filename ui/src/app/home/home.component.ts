import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  expireTimePresets = ["1h", "1d", "1w", "1m", "never"];
  isInSession = true;

  constructor() { }

  ngOnInit(): void {
  }

  newSession() {
    this.isInSession = !this.isInSession;
  }

  createSession() {

  }
}
