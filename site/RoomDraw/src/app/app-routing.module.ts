import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { HousingComponent } from './housing/housing.component';
import { LiveDrawComponent } from './live-draw/live-draw.component';
import { DocumentComponent } from './document/document.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthenticationGuard } from './authentication/authentication.guard';

const routes: Routes = [
	{ path: 'housing', component: HousingComponent, canActivate: [AuthenticationGuard] },
	// { path: 'group', component: GroupComponent, canActivate: [AuthenticationGuard] },
	{ path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
	// { path: 'live-draw', component: LiveDrawComponent, canActivate: [AuthenticationGuard] },
	{ path: 'documents', component: DocumentComponent, canActivate: [AuthenticationGuard] },
	{ path: 'faqs', component: FaqComponent, canActivate: [AuthenticationGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'reset-password', component: ResetPasswordComponent },
	{ path: 'log-out', component: LogOutComponent },
	{ path: 'change-password', component: ChangePasswordComponent, canActivate: [AuthenticationGuard] },
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
