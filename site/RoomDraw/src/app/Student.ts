export class Student {
	student_id: number;
	first_name: string;
	last_name: string;
	random_number: number;
	grade_level: number;
	sex: string;
	group_id: number;
	roommate_id: number;
}

export class LoginResponse {
	token: string;
	success: number;
}

export class ChangePasswordResponse {
	success: number
}
