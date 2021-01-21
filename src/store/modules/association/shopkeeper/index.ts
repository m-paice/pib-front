import { Reducer } from "redux";
import { StateShopkeeper, types } from "./types";

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

        default:
            return state;
    }
};

export const reducers: Reducer<StateShopkeeper> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
