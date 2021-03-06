import { tap } from "rxjs/operators";
import { HttpInterceptor, HttpRequest, HttpEvent, HttpHandler, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(public auth: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
               // todo: get refreshed token if it exists:
            }
        }, (err: any) => {
                if(err instanceof HttpErrorResponse) {
                    if(err.status == 401 || err.status == 0) {
			window.location.href = "http://localhost:4200/log-out";
			localStorage.removeItem('SESSION-ID');
                    }
                }
            }));
    }
}
