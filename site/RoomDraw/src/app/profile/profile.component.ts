import { GroupService } from '../group.service';
import { Component, OnInit } from '@angular/core';
import { Invitations } from '../Invitations';
import { tap } from 'rxjs/operators';
import { Student } from '../Student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myInfo: Student;

  invitations: Invitations[];

  leader: Student;

  constructor(
    private studentService: StudentService,
		private groupService: GroupService
  ) { }

  ngOnInit() {
    this.groupService.getInvites().pipe(tap(t => console.log(t)))
      .subscribe(invitations => this.invitations = invitations);
    
    this.myInfo = new Student();
		this.getMyInfo();

    this.getLeader();
  }

  getMyInfo(): void {
		this.studentService.getInfo()
      .subscribe(myInfo => this.myInfo = myInfo);
  }

  getLeader() {
    this.groupService.getGroupLeader()
      .subscribe(leader => this.leader = leader);
  }

  acceptInvite(invite) {
    var temp;
    this.groupService.acceptInvite(invite)
      .subscribe(error => temp = error);
  }

  declineInvite(invite) {
    var temp;
    this.groupService.declineInvite(invite)
      .subscribe(error => temp = error);
  }
}
