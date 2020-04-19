import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;

  constructor() {}

  login() {
    // Could API calls go here?
    this.isLoggedIn = true;
  }

  logout() {
      // Could API calls go here?
    this.isLoggedIn = false;
  }
}