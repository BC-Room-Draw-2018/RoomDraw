import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { ChangePasswordResponse } from '../Student';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  oldPassword = null;
  newPassword = null;
  confirmNewPassword = null;
  responseMessage: ChangePasswordResponse = null;
  passwordsMatch = false;
  passwordChanged = false;
  working = false;

  ngOnInit() {
  }

  get_old_password(val) {
    this.oldPassword = val;
  }

  get_new_password(val) {
    this.newPassword = val;
  }

  get_confirmed_new_password(val) {
    this.confirmNewPassword = val;
  }

  changePassword() { 
    if(this.newPassword.equals(this.confirmNewPassword) == true) {
      this.passwordsMatch = true;
    } 

    if(this.passwordsMatch) {
      this.working = true;

      this.authenticationService.changePassword(this.oldPassword, this.newPassword)
        .subscribe(response => this.responseMessage = response);

        setTimeout(() => {  
          this.working = false;
          if(this.responseMessage == undefined || this.responseMessage.success == 0) {
            // Error occurred (I'm not sure what)
          } else if(this.responseMessage.success == 1) {
            //Change password successful
            this.passwordChanged = true;
          } else {
            console.log("Something went very wrong.");
          }
        }, 2000);
    } 
  }

}
