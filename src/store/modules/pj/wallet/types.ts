export enum types {
    LOAD_WALLET = "@pj/WALLET/LOAD_WALLET",
    LOAD_WALLET_INIT = "@pj/WALLET/LOAD_WALLET_INIT",
    LOAD_WALLET_SUCCESS = "@pj/WALLET/LOAD_WALLET_SUCCESS",
    LOAD_WALLET_FAILURE = "@pj/WALLET/LOAD_WALLET_FAILURE",

    ADD_WALLET = "@pj/WALLET/ADD_WALLET",
    ADD_WALLET_INIT = "@pj/WALLET/ADD_WALLET_INIT",
    ADD_WALLET_SUCCESS = "@pj/WALLET/ADD_WALLET_SUCCESS",
    ADD_WALLET_FAILURE = "@pj/WALLET/ADD_WALLET_FAILURE",

    REMOVE_WALLET = "@pj/WALLET/REMOVE_WALLET",
    REMOVE_WALLET_INIT = "@pj/WALLET/REMOVE_WALLET_INIT",
    REMOVE_WALLET_SUCCESS = "@pj/WALLET/REMOVE_WALLET_SUCCESS",
    REMOVE_WALLET_FAILURE = "@pj/WALLET/REMOVE_WALLET_FAILURE",

    UPDATE_WALLET = "@pj/WALLET/UPDATE_WALLET",
    UPDATE_WALLET_INIT = "@pj/WALLET/UPDATE_WALLET_INIT",
    UPDATE_WALLET_SUCCESS = "@pj/WALLET/UPDATE_WALLET_SUCCESS",
    UPDATE_WALLET_FAILURE = "@pj/WALLET/UPDATE_WALLET_FAILURE",
}

export interface Wallet {
    id: string;
    date: Date;
    cnpj: string;
    nameCompany: string;
    operation: number;
    value: number;
}

export interface ById {
    [key: string]: object;
}

export interface StateWallet {
    byId: ById;
    allId: string[];
}
