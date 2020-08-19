import { TypesAuth } from "./types";

const { AUTH_LOGIN, AUTH_LOGOUT } = TypesAuth;

interface Result {
    type: string;
    payload?: any;
}

interface ActionsAuth {
    login(data): Result;
    logout(): Result;
}

export const actionsUser: ActionsAuth = {
    login: (data) => ({
        type: AUTH_LOGIN,
        payload: data,
    }),
    logout: () => ({
        type: AUTH_LOGOUT,
    }),
};
