import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export const authInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
  const authToken = localStorage.getItem('token') || ''; // Get token from localStorage or a secure store

  const authReq = req.clone({
    setHeaders: {
      Authorization: authToken,
    },
  });

  return next(authReq);
};
