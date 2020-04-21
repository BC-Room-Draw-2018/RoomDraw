import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators'
import { LoginResponse } from '../Student'


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  succeeded = 0;
  header = "";
  isLoggedIn = false;

  httpOptions = {
    headers: new HttpHeaders({
      'SESSION-ID': window.localStorage['SESSION-ID']
    })
  }
  constructor(
    private http: HttpClient
  ) { }

  login(username, password): Observable<LoginResponse> {
    var url = "http://localhost:8000/login"
    const body = {
      username: username,
      password: password
    }
    var str = JSON.stringify(body)
    
    var obs = this.http.post<LoginResponse>(url, body).pipe(share());
    obs.subscribe(result => {this.succeeded = result.success; this.header = result.token});
    if(this.succeeded != 0 || this.succeeded != undefined) {
      window.localStorage['SESSION-ID'] = this.header;
      this.isLoggedIn = true;
    }
    return obs;
    // this.isLoggedIn = true;
  }

  logout(): Observable<Object> {
    if(this.isLoggedIn) {
      this.isLoggedIn = false;
      window.localStorage['SESSION-ID'] = "";
    }
    var url = "http://localhost:8000/logout"
    return this.http.post<Object>(url, this.httpOptions)
  }
}