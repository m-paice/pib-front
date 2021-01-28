import { Reducer } from "redux";
import { StateShopkeeper, types } from "./types";
import { types as typesAuth } from "../../auth/types";

const { LOAD_SHOPKEEPER_SUCCESS, UPDATE_SHOPKEEPER_SUCCESS } = types;

import { createTreeAllId, createTreeById, updateElementById } from "../../common/selectors";

const initialState: StateShopkeeper = {
    byId: {},
    allId: [],
};

const reducerById: Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_SHOPKEEPER_SUCCESS:
            return createTreeById(payload);
        case UPDATE_SHOPKEEPER_SUCCESS:
            return updateElementById(state, payload);
        case typesAuth.AUTH_LOGOUT_SUCCESS:
            return {};
        default:
            return state;
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_SHOPKEEPER_SUCCESS:
            return createTreeAllId(payload);
        case UPDATE_SHOPKEEPER_SUCCESS:
            return state;
        case typesAuth.AUTH_LOGOUT_SUCCESS:
            return [];
        default:
            return state;
    }
};

export const reducers: Reducer<StateShopkeeper> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
