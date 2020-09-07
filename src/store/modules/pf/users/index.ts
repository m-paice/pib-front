import { Reducer } from "redux";
import { StateUser, types } from "./types";

const { ADD_USER_SUCCESS } = types;

import { insertElementById, insertElementAllId } from "../../common/selectors";

const initialState: StateUser = {
    byId: {},
    allId: [],
};

const reducerById: Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_USER_SUCCESS:
            return insertElementById(state, payload);
        default:
            return initialState.byId;
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_USER_SUCCESS:
            return insertElementAllId(state, payload);
        default:
            return initialState.allId;
    }
};

export const reducers: Reducer<StateUser> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
