import { AuthAction, AuthActionTypes, UserAuth, authInitialState } from './auth.actions';

export function authReducer(state = authInitialState, action: AuthAction): UserAuth {
    switch (action.type) {

        case AuthActionTypes.LOGIN_SUCCESS: {
            // return Object.assign({}, state, {
            //   auth: action.payload
            // });
            console.log(state);
            return {...state, entitlment: action.payload.entitlment, userName: action.payload.userName}
        }

        default: {
            return state;
        }
    }
}