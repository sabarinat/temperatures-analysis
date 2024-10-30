import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API } from './constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }

  login(data : any) : Observable<any>{
    return this.http.post(API.USER_LOGIN, data)
  }

  signup(data : any) : Observable<any>{
    return this.http.post(API.USER_SIGNUP, data)
  }
}
