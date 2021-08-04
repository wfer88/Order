import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from "src/app/Models/User";


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) {
  }
  baseURL = "http://localhost:3093/User";

  getUser(userId: Number): Observable<User> {
    let url = this.baseURL + "?userId=" + Number;
    return this.http.get<User>(url);
  }
  
  addUser(user: User) {
    return this.http.post(this.baseURL, user);
  }
}

