import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GroupComponent } from './group/group.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingComponent } from './housing/housing.component';
import { ProfileComponent } from './profile/profile.component';
import { DocumentComponent } from './document/document.component';
import { FaqComponent } from './faq/faq.component';
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		GroupComponent,
		NavBarComponent,
		HousingComponent,
		ProfileComponent,
		DocumentComponent,
		FaqComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
