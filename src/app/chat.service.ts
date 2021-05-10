import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';


interface userCount {
  userCount: number,
  targetCount: number
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer 3|MnninPhDUQbcMQkY2tSpjLuXZl9ESnhzNNhOeyrD'
  })
};

export interface userData {
  name: String;
  email: String;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {


  constructor(private http: HttpClient) { }

  getUserCount(): Observable<userCount> {
    return this.http.get<userCount>(`${environment.apiUrl}/room/get`, httpOptions)
  }

  addNewUser(userData: userData): Observable<userData> {
    return this.http.post<userData>(`${environment.apiUrl}/addUser`, userData, httpOptions)
  }

  // login(userData: userData) {
  //   return this.http.post<userData>(`${environment.apiUrl}/login`, userData, httpOptions)
      
  // }

}