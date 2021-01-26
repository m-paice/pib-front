import { types, Debtor } from "./types";

const { LOAD_DEBTOR, UPDATE_DEBTOR, CLOSE_OR_OPEN_DEBTOR } = types;

export interface Result {
    type: string;
    payload?: any;
}

interface Actions {
    loadNegociation(): Result;
    updateNegociation(data): Result;
    closeOrOpen(data): Result;
}

export const actions: Actions = {
    loadNegociation: () => ({
        type: LOAD_DEBTOR,
    }),
    updateNegociation: (data) => ({
        type: UPDATE_DEBTOR,
        payload: data,
    }),
    closeOrOpen: (data) => ({
        type: CLOSE_OR_OPEN_DEBTOR,
        payload: data,
    }),
};
