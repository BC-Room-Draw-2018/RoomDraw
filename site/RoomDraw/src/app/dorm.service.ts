import { Dorm } from './Dorm'
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class DormService {

	myInfo: Dorm;

	httpOptions = {
		headers: new HttpHeaders({
			'SESSION-ID': 'alex'
		})
	}

	constructor(
		private http: HttpClient
	) { }


	getDormInfo(dorm_id): Observable<Dorm> {
		var url = `http://localhost:8000/dorms?dorm=${dorm_id}`
		return this.http.get<Dorm>(url, this.httpOptions);
	}

	getAllDorms(): Observable<Dorm> {
		var url = 'http://localhost:8000/dorms';
		return this.http.get<Dorm[]>(url, this.httpOptions);
	}
}
