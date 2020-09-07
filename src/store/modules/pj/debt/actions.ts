import { types, Debt } from "./types";

const { ADD_DEBT, REMOVE_DEBT, UPDATE_DEBT } = types;

export interface ResultAction {
    type: string;
    payload?: any;
}

interface Actions {
    addDebt(data: Partial<Debt>): ResultAction;
    removeDebt(id: string): ResultAction;
    updateDebt(id: string, data: any): ResultAction;
}

export const actions: Actions = {
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
