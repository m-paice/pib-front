import { Reducer } from "redux";
import { StateCompany, types } from "./types";

const { ADD_COMPANY } = types;

import { insertElementById, insertElementAllId } from "../../common/selectors";

const initialState: StateCompany = {
    byId: {
        "1": {
            id: "1",
            name: "Claro Móvel Brasil",
            cnpj: "78.441.581/0001-94",
            email: "claro@claro.com.br",
            address: [],
            phoneNumbers: [],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        "2": {
            id: "2",
            name: "Tim Móvel Brasil",
            cnpj: "78.441.581/0001-94",
            email: "tim@tim.com.br",
            address: [],
            phoneNumbers: [],
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    },
    allId: ["1", "2"],
};

const reducerById: Reducer = (state = {}, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_COMPANY:
            return insertElementById(state, payload);
        default:
            return initialState.byId;
    }
};

const reducerAllId: Reducer = (state = [], action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_COMPANY:
            return insertElementAllId(state, payload);
        default:
            return initialState.allId;
    }
};

export const reducers: Reducer<StateCompany> = (state = initialState, actions) => ({
    byId: reducerById(state.byId, actions),
    allId: reducerAllId(state.allId, actions),
});
