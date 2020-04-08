import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { HousingComponent } from './housing/housing.component';
import { DocumentComponent } from './document/document.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';
import { LogOutComponent } from './log-out/log-out.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
	{ path: 'housing', component: HousingComponent },
	{ path: 'group', component: GroupComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'documents', component: DocumentComponent },
	{ path: 'faqs', component: FaqComponent },
	{ path: 'login', component: LoginComponent },
	{ path: 'reset-password', component: ResetPasswordComponent },
	{ path: 'log-out', component: LogOutComponent },
	{ path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
