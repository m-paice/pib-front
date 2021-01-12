import { Company } from "../../pj/company/types";

export enum types {
    LOAD_DEBT = "@pj/debt/LOAD_DEBT",
    LOAD_DEBT_INIT = "@pj/debt/LOAD_DEBT_INIT",
    LOAD_DEBT_SUCCESS = "@pj/debt/LOAD_DEBT_SUCCESS",
    LOAD_DEBT_FAILURE = "@pj/debt/LOAD_DEBT_FAILURE",

    ADD_DEBT = "@pj/debt/ADD_DEBT",
    ADD_DEBT_INIT = "@pj/debt/ADD_DEBT_INIT",
    ADD_DEBT_SUCCESS = "@pj/debt/ADD_DEBT_SUCCESS",
    ADD_DEBT_FAILURE = "@pj/debt/ADD_DEBT_FAILURE",

    REMOVE_DEBT = "@pj/debt/REMOVE_DEBT",
    REMOVE_DEBT_INIT = "@pj/debt/REMOVE_DEBT_INIT",
    REMOVE_DEBT_SUCCESS = "@pj/debt/REMOVE_DEBT_SUCCESS",
    REMOVE_DEBT_FAILURE = "@pj/debt/REMOVE_DEBT_FAILURE",

    UPDATE_DEBT = "@pj/debt/UPDATE_DEBT",
    UPDATE_DEBT_INIT = "@pj/debt/UPDATE_DEBT_INIT",
    UPDATE_DEBT_SUCCESS = "@pj/debt/UPDATE_DEBT_SUCCESS",
    UPDATE_DEBT_FAILURE = "@pj/debt/UPDATE_DEBT_FAILURE",
}

export interface Details {
    id: number;
    idRegister: number;
    portion: number;
    dueDate: Date;
    valuePortion: number;
    datePayment: Date;
    situation: number; // [1] ok [2] proxima
    next: number;
}

export interface Consumer {
    id: string;
    cpf: string;
    usuarioId: string;
    createdAt: string;
    updatedAt: string;
}

export interface Shookeeper {
    id: string;
    usuarioId: string;
    cnpj: string;
    dataFundacao: string;
    fantasia: string;
    inscricaoEstadual: string;
    inscricaoMunicipal: string;
    razaoSocial: string;
    createdAt: string;
    updatedAt: string;
}

export interface Negociation {
    id: string;
    atrasado: string;
    consumidorId: string;
    dataRegistro: Date;
    dataVencimento: string;
    debitoId: string;
    desconto: string;
    divida: string;
    formaPagamento: string;
    lojistaId: string;
    negociado: string;
    parcelamento: number;
    recebido: string;
    situacao: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Debt {
    id: string;
    consumidorId: string;
    lojistaId: string;
    consumidor: Consumer;
    negociacao: Negociation;
    lojista: Shookeeper;
    contrato: string;
    inclusao: string;
    seqdiv: string;
    status: string;
    tipoDoc: string;
    valor: string;
    vencimento: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ById {
    [key: string]: object;
}

export interface StateDebt {
    byId: ById;
    allId: string[];
}
