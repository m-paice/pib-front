export enum types {
    ADD_USER = "@pf/user/ADD_USER",
    ADD_USER_INIT = "@pf/user/ADD_USER_INIT",
    ADD_USER_SUCCESS = "@pf/user/ADD_USER_SUCCESS",
    ADD_USER_FAILURE = "@pf/user/ADD_USER_FAILURE",

    REMOVE_USER = "@pf/user/REMOVE_USER",
    REMOVE_USER_INIT = "@pf/user/REMOVE_USER_INIT",
    REMOVE_USER_SUCCESS = "@pf/user/REMOVE_USER_SUCCESS",
    REMOVE_USER_FAILURE = "@pf/user/REMOVE_USER_FAILURE",

    UPDATE_USER = "@pf/user/UPDATE_USER",
    UPDATE_USER_INIT = "@pf/user/UPDATE_USER_INIT",
    UPDATE_USER_SUCCESS = "@pf/user/UPDATE_USER_SUCCESS",
    UPDATE_USER_FAILURE = "@pf/user/UPDATE_USER_FAILURE",
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
