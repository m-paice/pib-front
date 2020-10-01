import { Reducer } from "redux";
import { StateNegociation, types } from "./types";

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
        default:
            return state;
    }
};

export const reducers: Reducer<StateNegociation> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
