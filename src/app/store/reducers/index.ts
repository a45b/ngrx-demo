import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { UserAuth } from 'src/app/auth/store/auth.actions';

import * as fromAuth from '../../auth/store/auth.reducer';

export interface AppState {
    auth: UserAuth;
}

export const reducers: ActionReducerMap<AppState> = {
    auth: fromAuth.authReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [];
