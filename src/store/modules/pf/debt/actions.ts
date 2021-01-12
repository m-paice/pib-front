import { types, Debt } from "./types";

const { LOAD_DEBT, ADD_DEBT, REMOVE_DEBT, UPDATE_DEBT } = types;

export interface ResultAction {
    type: string;
    payload?: any;
}

interface Actions {
    loadDebt(): ResultAction;
    addDebt(data): ResultAction;
    removeDebt(id: string): ResultAction;
    updateDebt(id: string, data): ResultAction;
}

export const actions: Actions = {
    loadDebt: () => ({
        type: LOAD_DEBT,
    }),
    addDebt: (data) => ({
        type: ADD_DEBT,
        payload: data,
    }),
    removeDebt: (id) => ({
        type: REMOVE_DEBT,
        payload: id,
    }),
    updateDebt: (id, data) => ({
        type: UPDATE_DEBT,
        payload: {
            id,
            data,
        },
    }),
};
