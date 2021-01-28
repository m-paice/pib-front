import { Reducer } from "redux";
import { StateDebt, types } from "./types";
import { types as typesAuth } from "../../auth/types";

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
        case typesAuth.AUTH_LOGOUT_SUCCESS:
            return {};
        default:
            return state;
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_DEBT_SUCCESS:
            return createTreeAllId(payload);
        case ADD_DEBT_SUCCESS:
            return insertElementAllId(state, payload);
        case typesAuth.AUTH_LOGOUT_SUCCESS:
            return [];
        default:
            return state;
    }
};

export const reducers: Reducer<StateDebt> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
