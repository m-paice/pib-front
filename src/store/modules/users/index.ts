import { Reducer } from "redux";
import { StateUsers, types } from "./types";

// const { LOAD_USERS, CREATE_USERS } = types;
// import {} from "../../common/selectors";

const initialState: StateUsers = {
    byId: {},
    allId: [],
};

const reducerById: Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        default:
            return state;
    }
};

export const reducers: Reducer<StateUsers> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
