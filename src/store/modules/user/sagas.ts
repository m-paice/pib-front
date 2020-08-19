import { put } from "redux-saga/effects";

import { TypesUser } from "./types";

const { ADD_USER_SUCCESS, ADD_USER_FAILURE } = TypesUser;

function* createUser() {
    try {
        yield put({
            type: ADD_USER_SUCCESS,
            payload: {
                id: Math.random(),
                name: "Matheus Paice",
                email: "matheus.paice@gmail.com",
            },
        });
    } catch (error) {
        yield put({ type: ADD_USER_FAILURE });
    }
}

export default {
    createUser,
};
