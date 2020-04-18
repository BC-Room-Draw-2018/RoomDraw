import { Student } from '../Student';
import { Invitations } from '../Invitations';
import { StudentService } from '../student.service';
import { GroupService } from '../group.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-group',
	templateUrl: './group.component.html',
	styleUrls: ['./group.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class GroupComponent implements OnInit {

	constructor(
		private groupService: GroupService,
		private studentService: StudentService,
		private location: Location
	) { }

	members: Student[];
	invites: Invitations[];

	static idx = 0;

	addGroupButtonVisable = true;
	addGroupVisable: boolean = false;
	numberInGroup = 0;
	searchVisable: boolean = false;
	studentsInGroup = [];

	membersUndefined: boolean = false;
	searchTerm = null;

	ngOnInit() {
		this.getGroupMembers();
		this.getGroupInvites();

		if(this.members == undefined) {
			this.membersUndefined = true;
		}
	}

	getGroupMembers(): void {
		this.groupService.getGroupMembers()
			.subscribe(members => this.members = members);
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
		this.addGroupVisable = false;
		this.addGroupButtonVisable = true;
		this.studentsInGroup = []
		this.searchVisable = false;
	}

	setNumberInGroup(num) {
		for(var i = 0; i < num; i++) {
			this.studentsInGroup[i] = i;
		}
		this.searchVisable = true;
	}

	searchForStudents() {
		console.log("student = " + this.searchTerm);
	}

	inputCollector(val) {
		this.searchTerm = val;
	}
}
