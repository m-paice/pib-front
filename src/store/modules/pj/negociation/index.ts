import { Reducer } from "redux";
import { StateNegociation, types } from "./types";

const { LOAD_NEGOCIATION_SUCCESS } = types;

import { createTreeById, createTreeAllId } from "../../common/selectors";

const initialState: StateNegociation = {
    byId: {},
    allId: [],
};

const reducerById: Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_NEGOCIATION_SUCCESS:
            return createTreeById(payload);
        default:
            return initialState.byId;
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_NEGOCIATION_SUCCESS:
            return createTreeAllId(payload);
        default:
            return initialState.allId;
    }
};

export const reducers: Reducer<StateNegociation> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
