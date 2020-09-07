import { Reducer } from "redux";
import { StateCompany, types } from "./types";

const { ADD_COMPANY } = types;

import { insertElementById, insertElementAllId } from "../../common/selectors";

const initialState: StateCompany = {
    byId: {},
    allId: [],
};

const reducerById: Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_COMPANY:
            return insertElementById(state, payload);
        default:
            return {};
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_COMPANY:
            return insertElementAllId(state, payload);
        default:
            return [];
    }
};

export const reducers: Reducer<StateCompany> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
