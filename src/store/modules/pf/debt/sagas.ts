import { put, select, call } from "redux-saga/effects";

import { types } from "./types";
import { ResultAction } from "./actions";

import { User } from "../../auth/types";

import { userIdAuthenticated, userAuthenticated } from "../../auth/selectors";

// api
import api from "../../../../service/api";

function* loadDebt() {
    try {
        const response = yield call(api.get, "/debito", {
            params: {
                include: ["consumidor", "lojista"],
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

function* createDebt(action: ResultAction) {
    const { type, payload } = action;

    const userId = yield select(userIdAuthenticated);

    try {
        yield put({
            type: types.ADD_DEBT_SUCCESS,
            payload: [],
        });
    } catch (error) {
        yield put({ type: types.ADD_DEBT_FAILURE });
    }
}

export default {
    loadDebt,
    createDebt,
};
