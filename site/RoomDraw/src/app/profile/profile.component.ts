import { GroupService } from '../group.service';
import { Component, OnInit } from '@angular/core';
import { Invitations } from '../Invitations';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  invitations: Invitations[];

  constructor(
    private groupService: GroupService
  ) { }

  ngOnInit() {
    this.groupService.getInvites().pipe(tap(t => console.log(t)))
      .subscribe(invitations => this.invitations = invitations);
  }
}
