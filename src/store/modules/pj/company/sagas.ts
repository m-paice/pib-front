import { put } from "redux-saga/effects";

import { types } from "./types";

import data from "../../../../data/companies";

function* loadCompanies() {
    try {
        const response = yield data.map((item) => item);

        yield put({ type: types.LOAD_COMPANY_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: types.LOAD_COMPANY_FAILURE });
    }
}

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
    loadCompanies,
    createCompany,
};
