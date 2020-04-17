import { Student } from '../Student';
import { Group } from '../Group';
import { Invitations } from '../Invitations';
import { StudentService } from '../student.service';
import { GroupService } from '../group.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-group',
	templateUrl: './group.component.html',
	styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {
	myInfo: Student;

	constructor(
		private groupService: GroupService,
		private studentService: StudentService,
		private location: Location
	) { }

	group: Group;
	members: Student[];
	invites: Invitations[];

	static idx = 0;

	addGroupButtonVisable = true;
	addGroupVisable: boolean = false;

	searchTerm = null;
	listAllStudents: boolean = false;

	searchedForStudents: Student[] = [];
	studentsFound: boolean = false;

	studentsInGroup: Student[] = [];

	ngOnInit() {
		this.getGroupMembers();
		this.getGroupInvites();
		this.getGroup();
		this.myInfo = new Student();
		this.getMyInfo();
	}

	getMyInfo(): void {
		this.studentService.getInfo()
			.subscribe(myInfo => this.myInfo = myInfo);
	}

	getGroupMembers(): void {
		this.groupService.getGroup()
			.subscribe(group => this.group = group);
		this.groupService.getGroupMembers()
			.subscribe(members => this.members = members);
	}

	getGroup() {
		this.groupService.getGroup()
			.subscribe(group => this.group = group);
	}

	leaveGroup(): void {
		this.groupService.leaveGroup().
			subscribe(() => location.reload())
	}

	private _populateInviteLeaders(invitations: Invitations[]): void {
		if (invitations == null) {
			return;
		}

		GroupComponent.idx = 0;
		for (var i = 0; i < invitations.length; i++) {
			var id = invitations[i].group_id;
			this.studentService.getStudentInfo(id).
				subscribe(info => invitations[GroupComponent.idx++].leader = info.first_name + ' ' + info.last_name)
		}
	}

	private _populateInvitations(invitations: Invitations[]) {
		this._populateInviteLeaders(invitations);
		this.invites = invitations;
	}

	getGroupInvites(): void {
		this.groupService.getInvites()
			.subscribe(invitations => this._populateInvitations(invitations));
	}

	inviteToGroup(student_id): void {
		this.groupService.inviteToGroup(student_id)
			.subscribe();
	}

	acceptGroupInvite(group_id): void {
		this.groupService.acceptInvite(group_id)
			.subscribe(() => location.reload());
	}

	declineGroupInvite(group_id): void {
		this.groupService.declineInvite(group_id)
			.subscribe(() => location.reload());
	}

	makeAddGroupVisable() {
		this.addGroupButtonVisable = false;
		this.addGroupVisable = true;
	}

	closeAddGroup() {
		this.studentsInGroup = [];
		this.addGroupVisable = false;
		this.addGroupButtonVisable = true;
	}

	searchForStudents() {
		this.studentService.searchStudents(this.searchTerm)
			.subscribe(students => this.searchedForStudents = students);

		if(this.searchForStudents.length > 0) {
			this.studentsFound = true;
		}

		this.listAllStudents = true;
	}

	inputCollector(val) {
		this.searchTerm = val;
	}

	addStudent(randNum) {
		this.listAllStudents = false;

		var student = this.searchedForStudents.find(student => student.random_number == randNum);
		this.studentsInGroup.push(student);
	}

	removeStudent(randNum) {
		for(var i = 0; i < this.studentsInGroup.length; i++) {
			if(this.studentsInGroup[i].random_number == randNum) {
				var removed = this.studentsInGroup.splice(i, 1);
				break;
			}
		}
	}

	createGroup() {
		var temp;
		for(let student of this.studentsInGroup) {
			this.groupService.inviteToGroup(student.random_number)
				.subscribe(error => temp = error);
		}
		this.closeAddGroup();
	}

	groupLeader(): string {
		var leader = this.members.find(member => member.random_number == this.group.random_number);
        var leaderName = leader.first_name + " " + leader.last_name;
        return leaderName;

	}
}
