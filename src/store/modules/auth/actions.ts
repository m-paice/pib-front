import { types } from "./types";

const { AUTH_LOGIN, AUTH_LOGOUT, AUTH_LOGIN_CERTIFICATE } = types;

interface Result {
    type: string;
    payload?: any;
}

interface Actions {
    login(data: { login: string; senha: string }): Result;
    loginWithCertificate(data): Result;
    logout(): Result;
}

export const actions: Actions = {
    login: (data) => ({
        type: AUTH_LOGIN,
        payload: data,
    }),
    loginWithCertificate: (data) => ({
        type: AUTH_LOGIN_CERTIFICATE,
        payload: data,
    }),
    logout: () => ({
        type: AUTH_LOGOUT,
    }),
};
