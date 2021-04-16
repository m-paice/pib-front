export enum types {
    LOAD_USER = "@pj/users/LOAD_USER",
    LOAD_USER_INIT = "@pj/users/LOAD_USER_INIT",
    LOAD_USER_SUCCESS = "@pj/users/LOAD_USER_SUCCESS",
    LOAD_USER_FAILURE = "@pj/users/LOAD_USER_FAILURE",

    CREATE_USER = "@pj/users/CREATE_USER",
    CREATE_USER_INIT = "@pj/users/CREATE_USER_INIT",
    CREATE_USER_SUCCESS = "@pj/users/CREATE_USER_SUCCESS",
    CREATE_USER_FAILURE = "@pj/users/CREATE_USER_FAILURE",

    UPDATE_USER = "@pj/users/UPDATE_USER",
    UPDATE_USER_INIT = "@pj/users/UPDATE_USER_INIT",
    UPDATE_USER_SUCCESS = "@pj/users/UPDATE_USER_SUCCESS",
    UPDATE_USER_FAILURE = "@pj/users/UPDATE_USER_FAILURE",
}

export interface Users {
    id: string;
}

export interface ById {
    [key: string]: object;
}

export interface StateUsers {
    byId: ById;
    allId: string[];
}
