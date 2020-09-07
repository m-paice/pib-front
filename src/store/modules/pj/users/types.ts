export enum types {
    ADD_USER = "@pj/user/ADD_USER",
    ADD_USER_INIT = "@pj/user/ADD_USER_INIT",
    ADD_USER_SUCCESS = "@pj/user/ADD_USER_SUCCESS",
    ADD_USER_FAILURE = "@pj/user/ADD_USER_FAILURE",

    REMOVE_USER = "@pj/user/REMOVE_USER",
    REMOVE_USER_INIT = "@pj/user/REMOVE_USER_INIT",
    REMOVE_USER_SUCCESS = "@pj/user/REMOVE_USER_SUCCESS",
    REMOVE_USER_FAILURE = "@pj/user/REMOVE_USER_FAILURE",

    UPDATE_USER = "@pj/user/UPDATE_USER",
    UPDATE_USER_INIT = "@pj/user/UPDATE_USER_INIT",
    UPDATE_USER_SUCCESS = "@pj/user/UPDATE_USER_SUCCESS",
    UPDATE_USER_FAILURE = "@pj/user/UPDATE_USER_FAILURE",
}

export interface Address {
    zipcode: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    uf: string;
    main: boolean;
}

export interface PhoneNumber {
    ddd: string;
    number: string;
    main: boolean;
}

export interface User {
    id: string;
    name: string;
    cnpj: string;
    email: string;
    address: Address[];
    phoneNumbers: PhoneNumber[];
    createdAt: Date | null;
    updatedAt: Date | null;
}

export interface ById {
    [key: string]: object;
}

export interface StateUser {
    byId: ById;
    allId: string[];
}
