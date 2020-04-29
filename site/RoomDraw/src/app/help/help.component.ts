import { Student } from '../Student';
import { StudentService } from '../student.service';
import { Component, OnInit } from '@angular/core';


@Component({
	selector: 'app-help',
	templateUrl: './help.component.html',
	styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

	constructor(
		private studentService: StudentService
	) { }

	myInfo: Student;

	ngOnInit() {
		this.studentService.getInfo()
			.subscribe(myInfo => this.myInfo = myInfo);
	}

}
