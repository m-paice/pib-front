import { Reducer } from "redux";
import { StateAuth, types, User } from "./types";

const { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS } = types;

const initialState: StateAuth = {
    token: "",
    user: {} as User,
};

const reducerToken: Reducer = (state = "", action): string => {
    const { type, payload } = action;

    switch (type) {
        case AUTH_LOGIN_SUCCESS:
            return payload.token;
        case AUTH_LOGOUT_SUCCESS:
            return "";
        case "persist/REHYDRATE": {
            // reload window
            if (action && action.payload && action.payload.auth) {
                return action.payload.auth.token;
            }
        }
        default:
            return initialState.token;
    }
};

const reducerUser: Reducer = (state: Partial<User> = {}, action): User => {
    const { type, payload } = action;

    switch (type) {
        case AUTH_LOGIN_SUCCESS:
            return payload.user;
        case AUTH_LOGOUT_SUCCESS:
            return {} as User;
        case "persist/REHYDRATE": {
            // reload window
            if (action && action.payload && action.payload.auth) {
                return action.payload.auth.user;
            }
        }
        default:
            return initialState.user;
    }
};

export const reducers: Reducer<StateAuth> = (state = initialState, actions) => ({
    token: reducerToken(state.token, actions),
    user: reducerUser(state.user, actions),
});
