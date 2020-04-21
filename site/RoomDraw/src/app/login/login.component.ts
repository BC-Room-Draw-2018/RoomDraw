import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  username = null;
  password = null;
  incorrect:boolean = false;

  ngOnInit() {
  }

  get_username(val) { 
    this.username = val;
  }

  get_password(val) {
    this.password = val;
  }

  login() {
    var result = null; 

    this.authenticationService.login(this.username, this.password)
      .subscribe(result => result = result);
  }
}