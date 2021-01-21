export enum types {
    LOAD_SHOPKEEPER = "@SHOPKEEPER/LOAD_SHOPKEEPER",
    LOAD_SHOPKEEPER_INIT = "@SHOPKEEPER/LOAD_SHOPKEEPER_INIT",
    LOAD_SHOPKEEPER_SUCCESS = "@SHOPKEEPER/LOAD_SHOPKEEPER_SUCCESS",
    LOAD_SHOPKEEPER_FAILURE = "@SHOPKEEPER/LOAD_SHOPKEEPER_FAILURE",

    UPDATE_SHOPKEEPER = "@SHOPKEEPER/UPDATE_SHOPKEEPER",
    UPDATE_SHOPKEEPER_INIT = "@SHOPKEEPER/UPDATE_SHOPKEEPER_INIT",
    UPDATE_SHOPKEEPER_SUCCESS = "@SHOPKEEPER/UPDATE_SHOPKEEPER_SUCCESS",
    UPDATE_SHOPKEEPER_FAILURE = "@SHOPKEEPER/UPDATE_SHOPKEEPER_FAILURE",
}

export interface User {
    nome: string;
    habilitado: boolean;
}

export interface Shopkeeper {
    id: string;
    associacaoId: string;
    usuarioId: string;
    cnpj: string;
    dataFundacao: Date;
    fantasia: string;
    inscricaoEstadual: null;
    inscricaoMunicipal: null;
    razaoSocial: string;
    usuario: User;
    nome: string;
    updatedAt: Date;
    createdAt: Date;
}

export interface ById {
    [key: string]: object;
}

export interface StateShopkeeper {
    byId: ById;
    allId: string[];
}
