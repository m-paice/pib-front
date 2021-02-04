import { put, call } from "redux-saga/effects";

import { types } from "./types";

import api from "../../../../service/api";

function* load() {
    try {
        const response = yield call(api.get, "/carteira");

        yield put({
            type: types.LOAD_WALLET_SUCCESS,
            payload: response.data,
        });
    } catch (error) {
        yield put({
            type: types.LOAD_WALLET_FAILURE,
        });
    }
}

export default {
    load,
};
