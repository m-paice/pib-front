import { types } from "./types";

const { LOAD_WALLET } = types;

export interface Result {
    type: string;
    payload?: any;
}

interface Actions {
    loadWallet(): Result;
}

export const actions: Actions = {
    loadWallet: () => ({
        type: LOAD_WALLET,
    }),
};
