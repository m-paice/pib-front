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

function* closeOrOpenDebit(action) {
    const { type, payload } = action;

    const payloadData = {
        habilitado: !payload.habilitado,
    };

    try {
        const response = yield call(api.put, `/debito/${payload.id}`, payloadData);

        yield put({
            type: types.CLOSE_OR_OPEN_DEBTOR_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        yield put({
            type: types.CLOSE_OR_OPEN_DEBTOR_FAILURE,
        });
    }
}

export default {
    loadDebtors,
    closeOrOpenDebit,
};
