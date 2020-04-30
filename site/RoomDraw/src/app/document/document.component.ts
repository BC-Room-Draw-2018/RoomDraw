import { Component, OnInit } from '@angular/core';
import { Student } from '../Student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  myInfo: Student;

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.myInfo = new Student();
		this.getMyInfo();
  }

  getMyInfo(): void {
		this.studentService.getInfo()
			.subscribe(myInfo => this.myInfo = myInfo);
	}
}
