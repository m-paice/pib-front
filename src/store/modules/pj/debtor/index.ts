import { Reducer } from "redux";
import { StateDebtor, types } from "./types";

const { LOAD_DEBTOR_SUCCESS, UPDATE_DEBTOR_SUCCESS, CLOSE_OR_OPEN_DEBTOR_SUCCESS } = types;

import { createTreeById, createTreeAllId, insertElementById, insertElementAllId } from "../../common/selectors";

const initialState: StateDebtor = {
    byId: {},
    allId: [],
};

const reducerById: Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_DEBTOR_SUCCESS:
            return createTreeById(payload);
        case UPDATE_DEBTOR_SUCCESS:
        case CLOSE_OR_OPEN_DEBTOR_SUCCESS:
            return insertElementById(state, payload);
        default:
            return state;
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_DEBTOR_SUCCESS:
            return createTreeAllId(payload);
        case UPDATE_DEBTOR_SUCCESS:
        case CLOSE_OR_OPEN_DEBTOR_SUCCESS:
            return insertElementAllId(state, payload);
        default:
            return state;
    }
};

export const reducers: Reducer<StateDebtor> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
