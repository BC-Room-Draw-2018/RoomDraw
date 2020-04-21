import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn = false;

  httpOptions = {
    headers: new HttpHeaders({
      'SESSION-ID': 'alex'
    })
  }
  constructor(
    private http: HttpClient
  ) {}

  login(username, password): Observable<Object> {
    var url = "http://localhost:8000/login"
    const body = {
    username: username,
    password: password
    }
    var str = JSON.stringify(body)
    var result = this.http.post<Object>(url, str, this.httpOptions)
    console.log(result);
    return result;



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