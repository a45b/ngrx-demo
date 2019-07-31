import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getAuth() {
    console.log('here man');
    return this.http.get('https://api.myjson.com/bins/13bb8t');
  }
}
