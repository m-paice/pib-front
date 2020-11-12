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

export interface Debt {
    id: string;
    situation: number;
    dateRegister: Date;
    dateNegociation: Date | null;
    maturities: Date;
    debt: number;
    negociation: number;
    receipt: number;
    late: number;
    payment: number;
    companyId: string;
    userId: string;
    company: Company[];
    detailsPortion: Details[];
    createdAt: Date | null;
    updatedAt: Date | null;
}

export interface ById {
    [key: string]: object;
}

export interface StateDebt {
    byId: ById;
    allId: string[];
}
