import { put } from "redux-saga/effects";

import { types } from "./types";

function* createCompany() {
    try {
        yield put({
            type: types.ADD_COMPANY_SUCCESS,
            payload: {},
        });
    } catch (error) {
        yield put({ type: types.ADD_COMPANY_FAILURE });
    }
}

export default {
    createCompany,
};
