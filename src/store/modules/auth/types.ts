export enum types {
    AUTH_LOGIN = "@auth/AUTH_LOGIN",
    AUTH_LOGIN_SUCCESS = "@auth/AUTH_LOGIN_SUCCESS",
    AUTH_LOGIN_FAILURE = "@auth/AUTH_LOGIN_FAILURE",

    AUTH_LOGOUT = "@auth/AUTH_LOGOUT",
    AUTH_LOGOUT_SUCCESS = "@auth/AUTH_LOGOUT_SUCCESS",
    AUTH_LOGOUT_FAILURE = "@auth/AUTH_LOGOUT_FAILURE",
}

export interface Auth {
    token: string;
    user: User;
}

export interface User {
    id: string | number;
    name: string;
    email: string;
    document: string;
    type: string;
    createdAt: Date | null;
    updatedAt: Date | null;
}

export interface StateAuth {
    token: string;
    user: User;
}
