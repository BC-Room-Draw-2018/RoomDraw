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

	responseHandler(response) {
		if (response.success === true) {
			//Message saying successful
		}
		else {
			this.message = response.message;
		}
	}

	changePassword(current, newPassword, confirmation) {
		if(newPassword === confirmation) {
			this.authenticationService.changePassword(current, newPassword)
				.subscribe(response => console.log(response));
		}
	}

}
