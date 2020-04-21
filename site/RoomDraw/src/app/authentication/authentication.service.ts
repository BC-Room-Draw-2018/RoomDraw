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
  isLoggedIn = false;

  httpOptions = {
    headers: new HttpHeaders({
      'SESSION-ID': 'alex'
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
    obs.subscribe(result => this.succeeded = result.success);
    if(this.succeeded != 0 || this.succeeded != undefined) {
      this.isLoggedIn = true;
    }
    return obs;
    // this.isLoggedIn = true;
  }

  logout(): Observable<Object> {
    if(this.isLoggedIn) {
      this.isLoggedIn = false;
    }
    var url = "http://localhost:8000/logout"
    return this.http.post<Object>(url, this.httpOptions)
  }

  // signIn(username, password): Observable<Object> {
  //   var url = "http://localhost:8000/login"
  //   const body = {
  //   username: username,
  //   password: password
  //   }
  //   var str = JSON.stringify(body)
  //   return this.http.post<Object>(url, str, this.httpOptions)
  //   }
}