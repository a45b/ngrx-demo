import { Action } from '@ngrx/store';

export enum AuthActionTypes {
    LOGIN_REQUESTED = '[Auth] LOGIN Requested',
    LOGIN_SUCCESS = '[Auth] LOGIN Success',
    LOGIN_FAILED = '[Auth] LOGIN Failed',
}

export interface UserAuth {
  entitlment: boolean;
  userName: string;
}

export const authInitialState: UserAuth = {
  entitlment: false,
  userName: ''
};

export class LoginRequested implements Action {
    readonly type = AuthActionTypes.LOGIN_REQUESTED;
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LOGIN_SUCCESS;

  constructor(public payload: UserAuth) {}
}

export class LoginFailed implements Action {
  readonly type = AuthActionTypes.LOGIN_FAILED;
}

export type AuthAction = LoginRequested | LoginSuccess | LoginFailed;
