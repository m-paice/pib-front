import { types } from "./types";

const { AUTH_LOGIN, AUTH_LOGOUT } = types;

interface Result {
    type: string;
    payload?: any;
}

interface Actions {
    login(data: { type: string }): Result;
    logout(): Result;
}

export const actions: Actions = {
    login: (data) => ({
        type: AUTH_LOGIN,
        payload: data,
    }),
    logout: () => ({
        type: AUTH_LOGOUT,
    }),
};
