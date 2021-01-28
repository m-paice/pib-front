import { Reducer } from "redux";
import { StateNegociation, types } from "./types";
import { types as typesAuth } from "../../auth/types";

const { LOAD_NEGOCIATION_SUCCESS, UPDATE_NEGOCIATION_SUCCESS } = types;

import { createTreeById, createTreeAllId, insertElementById, insertElementAllId } from "../../common/selectors";

const initialState: StateNegociation = {
    byId: {},
    allId: [],
};

const reducerById: Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_NEGOCIATION_SUCCESS:
            return createTreeById(payload);
        case UPDATE_NEGOCIATION_SUCCESS:
            return insertElementById(state, payload);
        case typesAuth.AUTH_LOGOUT_SUCCESS:
            return {};
        default:
            return state;
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_NEGOCIATION_SUCCESS:
            return createTreeAllId(payload);
        case UPDATE_NEGOCIATION_SUCCESS:
            return insertElementAllId(state, payload);
        case typesAuth.AUTH_LOGOUT_SUCCESS:
            return [];
        default:
            return state;
    }
};

export const reducers: Reducer<StateNegociation> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
