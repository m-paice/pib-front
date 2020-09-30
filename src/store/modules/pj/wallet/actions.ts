import { types, Wallet } from "./types";

const { LOAD_WALLET, ADD_WALLET } = types;

export interface Result {
    type: string;
    payload?: any;
}

interface Actions {
    loadWallet(): Result;
    addItemWallet(data: Wallet): Result;
}

export const actions: Actions = {
    loadWallet: () => ({
        type: LOAD_WALLET,
    }),
    addItemWallet: (data) => ({
        type: ADD_WALLET,
        payload: data,
    }),
};
