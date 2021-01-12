import { put, select, call } from "redux-saga/effects";

import { types } from "./types";

// api
import api from "../../../../service/api";

function* loadDebt() {
    try {
        const response = yield call(api.get, "/debito", {
            params: {
                include: ["consumidor", "lojista", "negociacao"],
            },
        });

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

export default {
    loadDebt,
    createDebt,
};
