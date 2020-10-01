import { types, Negociation } from "./types";

const { LOAD_NEGOCIATION, UPDATE_NEGOCIATION } = types;

export interface Result {
    type: string;
    payload?: any;
}

interface Actions {
    loadNegociation(): Result;
    updateNegociation(data: Partial<Negociation>): Result;
}

export const actions: Actions = {
    loadNegociation: () => ({
        type: LOAD_NEGOCIATION,
    }),
    updateNegociation: (data: Partial<Negociation>) => ({
        type: UPDATE_NEGOCIATION,
        payload: data,
    }),
};
