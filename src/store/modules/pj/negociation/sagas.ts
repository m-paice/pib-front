import { put, call } from "redux-saga/effects";

import { Result } from "./actions";
import { types } from "./types";

import api from "../../../../service/api";

function* loadNegociation() {
    try {
        const response = yield call(api.get, "/regua-negociacao", {
            params: {
                order: [["idadeDivida", "ASC"]],
            },
        });

        yield put({
            type: types.LOAD_NEGOCIATION_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        yield put({ type: types.LOAD_NEGOCIATION_FAILURE });
    }
}

function* updateNegociation(action: Result) {
    const { type, payload } = action;

    try {
        yield put({ type: types.UPDATE_NEGOCIATION_SUCCESS, payload });
    } catch (error) {
        yield put({ type: types.UPDATE_NEGOCIATION_FAILURE });
    }
}

export default {
    loadNegociation,
    updateNegociation,
};
