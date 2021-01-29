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
    message: "";
}

export interface User {
    id: string;
    senha: string;
    nome: string;
    nascimento: string;
    email: string;
    celular: string;
    login: string;
    pessoais: null;
    termos: null;
    token: null;
    document: string;
    ativo: boolean;
    habilitado: boolean;
    updatedAt: Date;
    createdAt: Date;
}

export interface StateAuth {
    token: string;
    user: User;
    message: string;
}
