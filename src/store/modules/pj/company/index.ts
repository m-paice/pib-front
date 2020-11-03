import { Reducer } from "redux";
import { StateCompany, types } from "./types";

const { LOAD_COMPANY_SUCCESS, ADD_COMPANY_SUCCESS } = types;

import { insertElementById, insertElementAllId, createTreeAllId, createTreeById } from "../../common/selectors";

const initialState: StateCompany = {
    byId: {},
    allId: [],
};

const reducerById: Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_COMPANY_SUCCESS:
            return createTreeById(payload);
        case ADD_COMPANY_SUCCESS:
            return insertElementById(state, payload);
        default:
            return state;
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_COMPANY_SUCCESS:
            return createTreeAllId(payload);
        case ADD_COMPANY_SUCCESS:
            return insertElementAllId(state, payload);
        default:
            return state;
    }
};

export const reducers: Reducer<StateCompany> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
