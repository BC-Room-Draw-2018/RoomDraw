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

	ngOnInit() {
	}

	message: string;
	successfulPasswordChange: boolean = false;
	nonUserError: boolean = false;

	responseHandler(response) {
		if (response.success == true) {
			//Message saying successful
			this.successfulPasswordChange = true;
			this.nonUserError = false;
		}
		else {
			this.nonUserError = true;
			this.successfulPasswordChange = false;

			//Prints error message on page for user to read
			this.message = response.error;
			console.log(this.message);
		}
	}

	changePassword(current, newPassword, confirmation) {
		console.log("In changePassword");
		if(newPassword === confirmation) {
			this.authenticationService.changePassword(current, newPassword)
				.subscribe(response => this.responseHandler(response));
		}
	}

}
