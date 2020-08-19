import { Reducer } from "redux";
import { StateAuth, TypesAuth } from "./types";

const { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS } = TypesAuth;

const initialState: StateAuth = {
    token: "",
};

const reducerToken: Reducer = (state = "", action) => {
    const { type, payload } = action;

    switch (type) {
        case AUTH_LOGIN_SUCCESS:
            return payload.token;
        case AUTH_LOGOUT_SUCCESS:
            return "";
        default:
            return "";
    }
};

const reducersUser: Reducer<StateAuth> = (state = initialState, actions) => ({
    token: reducerToken(state.token, actions),
});

export default reducersUser;
