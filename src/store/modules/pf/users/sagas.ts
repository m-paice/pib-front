import { put } from "redux-saga/effects";

import { types } from "./types";

function* createUser() {
    try {
        yield put({
            type: types.ADD_USER_SUCCESS,
            payload: {
                id: Math.random(),
                name: "Matheus Paice",
                email: "matheus.paice@gmail.com",
            },
        });
    } catch (error) {
        yield put({ type: types.ADD_USER_FAILURE });
    }
}

export default {
    createUser,
};
