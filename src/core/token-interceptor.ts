import { AuthProvider } from './../providers/auth';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authProvider: AuthProvider) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authProvider.currentUser) {
      request = request.clone({
        setHeaders: {
          Authorization: "Bearer " + this.authProvider.currentUser["jwt"]
        }
      });
    }

    return next.handle(request);
  }
}

@Injectable()
export class SignInInterceptor implements HttpInterceptor {
  constructor(public authProvider: AuthProvider, private router: Router) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next.handle(request).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        // do stuff with response if you want
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          this.router.navigate(["sign-in"]);
        }
      }
    });
  }
}