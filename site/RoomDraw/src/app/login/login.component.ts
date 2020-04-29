import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { LoginResponse } from '../Student';


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
  incorrect: boolean = false;
  responseMessage: LoginResponse = null;
  working = false;

  ngOnInit() {
  }

  get_username(val) { 
    this.username = val;
  }

  get_password(val) {
    this.password = val;
  }

  login() {
    this.incorrect = false;
    this.working = true;

    this.authenticationService.login(this.username, this.password)
      .subscribe(response => this.responseMessage = response);

    setTimeout(() => {  
      this.working = false;
      if(this.responseMessage == undefined || this.responseMessage.success == 0) {
        this.incorrect = true;
      } else if(this.responseMessage.success == 1) {
        //login successful
        window.location.href = 'http://localhost:4200/home'
      } else {
        console.log("Something went very wrong.");
      }
    }, 2000);
  }

}