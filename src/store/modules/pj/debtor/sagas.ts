import { put, select, call } from "redux-saga/effects";

import { types } from "./types";

import api from "../../../../service/api";

function* loadDebtors() {
    try {
        const response = yield call(api.get, "/debito/lojista");

        yield put({
            type: types.LOAD_DEBTOR_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        yield put({ type: types.LOAD_DEBTOR_FAILURE });
    }
}

export default {
    loadDebtors,
};
