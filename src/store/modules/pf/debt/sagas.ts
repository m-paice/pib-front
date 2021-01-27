import { put, select, call } from "redux-saga/effects";

import { types } from "./types";

// api
import api from "../../../../service/api";

function* loadDebt() {
    try {
        const response = yield call(api.get, "/debito/consumidor");

        yield put({
            type: types.LOAD_DEBT_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        yield put({
            type: types.LOAD_DEBT_FAILURE,
        });
    }
}

// TODO: create negociation
function* createDebt(action) {
    const { payload } = action;

    try {
        const response = yield call(api.post, "/negociacao", payload);

        // yield put({
        //     type: types.ADD_DEBT_SUCCESS,
        //     payload: [],
        // });
    } catch (error) {
        yield put({ type: types.ADD_DEBT_FAILURE });
    }
}

function* paymentBillet(action) {
    const { payload } = action;

    const payloadData = {
        parcelaId: payload.id,
    };

    try {
        const response = yield call(api.post, "/pagamento/boleto", payloadData);

        yield put({
            type: types.PAYMENT_BILLET_DEBT_SUCCESS,
        });
    } catch (error) {
        yield put({
            type: types.PAYMENT_BILLET_DEBT_FAILURE,
        });
    }
}

export default {
    loadDebt,
    createDebt,

    paymentBillet,
};
