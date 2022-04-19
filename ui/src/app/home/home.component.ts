import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CredentialResponse } from 'src/app/_models/credential-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  expireTimePresets = ["1h", "1d", "1w", "1m", "never"];
  isInSession = true;
  CLIENT_ID: string | undefined;
  redirectUrl: string;

  constructor() {
    this.CLIENT_ID = environment.CLIENT_ID;
    if (!this.CLIENT_ID) {
      console.log("Error in retrieving CLIENT_ID!")
    }
    this.redirectUrl = `${environment.apiUrl} + /login` ;
  }

  ngOnInit(): void {
  }

  newSession() {
    this.isInSession = !this.isInSession;
  }

  createSession() {

  }
}
