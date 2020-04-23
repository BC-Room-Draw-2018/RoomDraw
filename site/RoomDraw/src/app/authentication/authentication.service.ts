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

    setTimeout(() => {  
      if(this.succeeded !== 0 && this.succeeded !== undefined) {
        window.localStorage['SESSION-ID'] = this.header;
      }
    }, 2000);

    return obs;
    // this.isLoggedIn = true;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('SESSION-ID');
    if(token == null || token == "" || token == undefined) {
      return false;
    } else {
      return true;
    }
  }

  logout(): Observable<Object> {
    this.succeeded = 0;
    this.header = "";
    localStorage.removeItem('SESSION-ID');
    window.location.href = "http://localhost:4200/log-out"
    var url = "http://localhost:8000/log-out"
    return this.http.post<Object>(url, this.httpOptions)
  }
}