import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {
  expireTimePresets = ["1h", "1d", "1w", "1m", "never"];
  isInSession = true;
  showModal = false;

  constructor() { }

  ngOnInit(): void {
  }

  newSession() {
    this.isInSession = !this.isInSession;
  }

  createSession() {

  }

  togglePollItemModal() {
    this.showModal = !this.showModal;
  }
}
