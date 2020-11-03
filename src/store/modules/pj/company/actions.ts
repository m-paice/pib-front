import { types } from "./types";

const { LOAD_COMPANY, ADD_COMPANY, REMOVE_COMPANY, UPDATE_COMPANY } = types;

export interface ResultAction {
    type: string;
    payload?: any;
}

interface Actions {
    loadCompanies(): ResultAction;
    addCompany(data: any): ResultAction;
    removeCompany(id: string): ResultAction;
    updateCompany(id: string, data: any): ResultAction;
}

export const actions: Actions = {
    loadCompanies: () => ({ type: LOAD_COMPANY }),
    addCompany: (data) => ({
        type: ADD_COMPANY,
        payload: data,
    }),
    removeCompany: (id) => ({
        type: REMOVE_COMPANY,
        payload: id,
    }),
    updateCompany: (id, data) => ({
        type: UPDATE_COMPANY,
        payload: {
            id,
            data,
        },
    }),
};
