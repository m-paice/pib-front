import { Reducer } from "redux";
import { StateUser, TypesUser } from "./types";

const { ADD_USER_SUCCESS } = TypesUser;

import { insertElementById, insertElementAllId } from "../common/selectors";

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
            return {};
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_USER_SUCCESS:
            return insertElementAllId(state, payload);
        default:
            return [];
    }
};

const reducersUser: Reducer<StateUser> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});

export default reducersUser;
