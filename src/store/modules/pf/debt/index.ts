import { Reducer } from "redux";
import { StateDebt, types } from "./types";

const { ADD_DEBT_SUCCESS, LOAD_DEBT_SUCCESS } = types;

import { insertElementById, insertElementAllId, createTreeAllId, createTreeById } from "../../common/selectors";

const initialState: StateDebt = {
    byId: {},
    allId: [],
};

const reducerById: Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_DEBT_SUCCESS:
            return createTreeById(payload);
        case ADD_DEBT_SUCCESS:
            return insertElementById(state, payload);
        default:
            return initialState.byId;
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_DEBT_SUCCESS:
            return createTreeAllId(payload);
        case ADD_DEBT_SUCCESS:
            return insertElementAllId(state, payload);
        default:
            return initialState.allId;
    }
};

export const reducers: Reducer<StateDebt> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
