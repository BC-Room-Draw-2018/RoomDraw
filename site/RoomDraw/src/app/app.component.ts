import { Component, OnInit, HostListener } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthenticationService } from './authentication/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RoomDraw';
  constructor(public authService: AuthenticationService) {}

  userActivity;
  userInactive: Subject<any> = new Subject();

  ngOnInit() {
    this.setTimeout();
    this.userInactive.subscribe(() => {
      this.logout();
    });
  }

  logout() {
    this.authService.logout();
  }

  setTimeout() {
    this.userActivity = setTimeout(() => {
      if (this.authService.isAuthenticated) {
        this.userInactive.next(undefined);
      }
    }, 600000);
  }

  @HostListener('window:mousemove') refreshUserState() {
    clearTimeout(this.userActivity);
    this.setTimeout();
  }
}
