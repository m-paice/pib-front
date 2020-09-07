import { types } from "./types";

const { ADD_COMPANY, REMOVE_COMPANY, UPDATE_COMPANY } = types;

export interface ResultAction {
    type: string;
    payload?: any;
}

interface Actions {
    addCompany(data: any): ResultAction;
    removeCompany(id: string): ResultAction;
    updateCompany(id: string, data: any): ResultAction;
}

export const actions: Actions = {
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
