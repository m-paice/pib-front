export enum types {
    AUTH_LOGIN = "@auth/AUTH_LOGIN",
    AUTH_LOGIN_SUCCESS = "@auth/AUTH_LOGIN_SUCCESS",
    AUTH_LOGIN_FAILURE = "@auth/AUTH_LOGIN_FAILURE",

    AUTH_LOGIN_CERTIFICATE = "@auth/AUTH_LOGIN_CERTIFICATE",

    AUTH_LOGOUT = "@auth/AUTH_LOGOUT",
    AUTH_LOGOUT_SUCCESS = "@auth/AUTH_LOGOUT_SUCCESS",
    AUTH_LOGOUT_FAILURE = "@auth/AUTH_LOGOUT_FAILURE",
}

export interface Auth {
    token: string;
    user: User;
    message: "";
}

export interface Endereco {
    id: string;
    bairro: string;
    usuarioId: string;
    cep: string;
    cidade: string;
    complemento: string;
    numero: string;
    rua: string;
    uf: string;
    updatedAt: Date;
    createdAt: Date;
}

export interface User {
    id: string;
    endereco: Endereco;
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
    ativacao: string;
    habilitado: boolean;
    updatedAt: Date;
    createdAt: Date;
}

export interface StateAuth {
    token: string;
    user: User;
    message: string;
}
