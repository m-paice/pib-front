import { types } from "./types";

const { LOAD_NEGOCIATION } = types;

interface Result {
    type: string;
    payload?: any;
}

interface Actions {
    loadNegociation(): Result;
}

export const actions: Actions = {
    loadNegociation: () => ({
        type: LOAD_NEGOCIATION,
    }),
};
