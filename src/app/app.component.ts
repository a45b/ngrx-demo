import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/reducers';

import * as fromAuth from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-app';

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    // debugger
    // this.store.dispatch(new fromAuth.LoginRequested());
  }
}
