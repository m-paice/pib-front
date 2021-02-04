import { Reducer } from "redux";
import { StateWallet, types } from "./types";
import { types as typesAuth } from "../../auth/types";

const { LOAD_WALLET_SUCCESS } = types;

import { createTreeById, createTreeAllId } from "../../common/selectors";

const initialState: StateWallet = {
    byId: {},
    allId: [],
};

const reducerById: Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_WALLET_SUCCESS:
            return createTreeById(payload);

        case typesAuth.AUTH_LOGOUT_SUCCESS:
            return {};
        default:
            return state;
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_WALLET_SUCCESS:
            return createTreeAllId(payload);

        case typesAuth.AUTH_LOGOUT_SUCCESS:
            return [];
        default:
            return state;
    }
};

export const reducers: Reducer<StateWallet> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
