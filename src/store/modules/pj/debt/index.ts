import { Reducer } from "redux";
import { StateDebt, types } from "./types";

const { ADD_DEBT } = types;

import { insertElementById, insertElementAllId } from "../../common/selectors";

const initialState: StateDebt = {
    byId: {},
    allId: [],
};

const reducerById: Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_DEBT:
            return insertElementById(state, payload);
        default:
            return {};
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_DEBT:
            return insertElementAllId(state, payload);
        default:
            return [];
    }
};

export const reducers: Reducer<StateDebt> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
