import { put } from "redux-saga/effects";

import { types } from "./types";
import { ResultAction } from "./actions";

function* createDebt(action: ResultAction) {
    const { type, payload } = action;

    try {
        yield put({
            type: types.ADD_DEBT_SUCCESS,
            payload: {},
        });
    } catch (error) {
        yield put({ type: types.ADD_DEBT_FAILURE });
    }
}

export default {
    createDebt,
};
