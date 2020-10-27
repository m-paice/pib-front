import { Reducer } from "redux";
import { StateAuth, types, User } from "./types";

const { AUTH_LOGIN_SUCCESS, AUTH_LOGOUT_SUCCESS } = types;

const initialState: StateAuth = {
    token: "123H12JK3KLJH.34MGMGG34JTI43J.234234.2342342FFSD",
    user: {
        id: "1",
        name: "Arthur Baroni Santos",
        email: "arthur@email",
        document: "845.889.442-22",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    type: "",
};

const reducerToken: Reducer = (state = "", action): string => {
    const { type, payload } = action;

    switch (type) {
        case AUTH_LOGIN_SUCCESS:
            return payload.token;
        case AUTH_LOGOUT_SUCCESS:
            return "";
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
        default:
            return initialState.user;
    }
};

const reducerType: Reducer = (state = "", action): string => {
    const { type, payload } = action;

    switch (type) {
        case AUTH_LOGIN_SUCCESS:
            return payload.type;
        case AUTH_LOGOUT_SUCCESS:
            return "";
        default:
            return initialState.type;
    }
};

export const reducers: Reducer<StateAuth> = (state = initialState, actions) => ({
    token: reducerToken(state.token, actions),
    user: reducerUser(state.user, actions),
    type: reducerType(state.type, actions),
});
