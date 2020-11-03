import { put, select } from "redux-saga/effects";

import { types } from "./types";
import { ResultAction } from "./actions";

import data from "../../../../data/debts";

import { User } from "../../auth/types";

import { userIdAuthenticated, userAuthenticated } from "../../auth/selectors";

function* loadDebt() {
    const user: User = yield select(userAuthenticated);

    try {
        const response = yield data.filter((item) => item.document === user.document);

        console.log("response: ", response);

        yield put({
            type: types.LOAD_DEBT_SUCCESS,
            payload: response,
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
            payload: data
                .filter((item) => item.document === userId)
                .map((item) => ({
                    ...item,
                    userId,
                })),
        });
    } catch (error) {
        yield put({ type: types.ADD_DEBT_FAILURE });
    }
}

export default {
    loadDebt,
    createDebt,
};
