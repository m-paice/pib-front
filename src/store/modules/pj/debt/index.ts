import { Reducer } from "redux";
import { StateDebt, types } from "./types";

const { ADD_DEBT } = types;

import { insertElementById, insertElementAllId } from "../../common/selectors";

const initialState: StateDebt = {
    byId: {
        "1": {
            id: "1",
            situation: "done",
            dateNegociation: new Date(),
            maturities: new Date(),
            value: 10,
            register: new Date(),
            companyId: "1",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        "2": {
            id: "2",
            situation: "done",
            dateNegociation: new Date(),
            maturities: new Date(),
            value: 30,
            register: new Date(),
            companyId: "1",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        "3": {
            id: "3",
            situation: "open",
            dateNegociation: new Date(),
            maturities: new Date(),
            value: 50,
            register: new Date(),
            companyId: "2",
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    },
    allId: ["1", "2", "3"],
};

const reducerById: Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_DEBT:
            return insertElementById(state, payload);
        default:
            return initialState.byId;
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_DEBT:
            return insertElementAllId(state, payload);
        default:
            return initialState.allId;
    }
};

export const reducers: Reducer<StateDebt> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
