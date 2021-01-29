import { Reducer } from "redux";
import { StateAuth, types, User } from "./types";

const { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS, AUTH_LOGIN_FAILURE } = types;

const initialState: StateAuth = {
    token: "",
    user: {} as User,
    message: "",
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
            return state;
    }
};

const reducerUser: Reducer = (state: User = {} as User, action): User => {
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
            return state;
    }
};

const reducerMessage: Reducer = (state = "", action) => {
    const { type, payload } = action;

    switch (type) {
        case AUTH_LOGIN_SUCCESS:
            return "";
        case AUTH_LOGIN_FAILURE:
            return payload;
        default:
            return state;
    }
};

export const reducers: Reducer<StateAuth> = (state = initialState, actions) => ({
    token: reducerToken(state.token, actions),
    user: reducerUser(state.user, actions),
    message: reducerMessage(state.message, actions),
});
