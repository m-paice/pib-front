export enum TypesUser {
    ADD_USER = "@user/ADD_USER",
    ADD_USER_INIT = "@user/ADD_USER_INIT",
    ADD_USER_SUCCESS = "@user/ADD_USER_SUCCESS",
    ADD_USER_FAILURE = "@user/ADD_USER_FAILURE",

    REMOVE_USER = "@user/REMOVE_USER",
    REMOVE_USER_INIT = "@user/REMOVE_USER_INIT",
    REMOVE_USER_SUCCESS = "@user/REMOVE_USER_SUCCESS",
    REMOVE_USER_FAILURE = "@user/REMOVE_USER_FAILURE",

    UPDATE_USER = "@user/UPDATE_USER",
    UPDATE_USER_INIT = "@user/UPDATE_USER_INIT",
    UPDATE_USER_SUCCESS = "@user/UPDATE_USER_SUCCESS",
    UPDATE_USER_FAILURE = "@user/UPDATE_USER_FAILURE",
}

export interface User {
    id: string;
    name: string;
}

export interface ById {
    [key: string]: object;
}

export interface StateUser {
    byId: ById;
    allId: string[];
}
