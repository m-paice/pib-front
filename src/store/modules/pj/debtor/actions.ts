import { types, Debtor } from "./types";

const { LOAD_DEBTOR, UPDATE_DEBTOR } = types;

export interface Result {
    type: string;
    payload?: any;
}

interface Actions {
    loadNegociation(): Result;
    updateNegociation(data: Partial<Debtor>): Result;
}

export const actions: Actions = {
    loadNegociation: () => ({
        type: LOAD_DEBTOR,
    }),
    updateNegociation: (data: Partial<Debtor>) => ({
        type: UPDATE_DEBTOR,
        payload: data,
    }),
};
