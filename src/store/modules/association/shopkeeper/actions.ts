import { types } from "./types";

const { LOAD_SHOPKEEPER, UPDATE_SHOPKEEPER } = types;

export interface ResultAction {
    type: string;
    payload?: any;
}

interface Actions {
    loadshopkeeper(): ResultAction;
    updateShopKeeper(data): ResultAction;
}

export const actions: Actions = {
    loadshopkeeper: () => ({
        type: LOAD_SHOPKEEPER,
    }),
    updateShopKeeper: (data) => ({
        type: UPDATE_SHOPKEEPER,
        payload: data,
    }),
};
