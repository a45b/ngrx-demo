import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';

import { Observable, of, defer, EMPTY } from 'rxjs';
import { map, switchMap, catchError, tap, take, mergeMap } from 'rxjs/operators';

import * as auth from './../store/auth.actions';

export interface Resp {
    error: any;
    data: auth.UserAuth;
}

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) { }

    @Effect()
    loginAction$ = this.actions$
    .pipe(
        ofType(auth.AuthActionTypes.LOGIN_REQUESTED),
        mergeMap(() => this.authService.getAuth()
            .pipe(
                tap((res) => console.log(res)),
                map((res: Resp) =>  new auth.LoginSuccess(res.data)),
                catchError(() => EMPTY)
            )
        )
    );
}
