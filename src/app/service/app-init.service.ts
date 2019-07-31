import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store, select } from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.actions';

import { AppState } from '../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private http: HttpClient, private store: Store<AppState>) { }

  initApp(): Promise<any> {
    this.store.dispatch(new fromAuth.LoginRequested());
    debugger;
    return null;
  }

  getAuth() {
    return this.http.get('https://api.myjson.com/bins/13bb8t');
  }
}
