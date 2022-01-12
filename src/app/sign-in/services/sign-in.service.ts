import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SignInService {

  constructor(private http: HttpClient) { }

  rootURL = '/api';

  getUsers() {
    return this.http.get(this.rootURL + '/users');
  }

  getElement() {
    return this.http.get(this.rootURL);
  }

  addUser(user: any) {
    return this.http.post(this.rootURL + '/user', {user});
  }
}
