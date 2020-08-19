import { put } from "redux-saga/effects";

import { TypesAuth } from "./types";

const { AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAILURE, AUTH_LOGOUT_SUCCESS, AUTH_LOGOUT_FAILURE } = TypesAuth;

function* login() {
    try {
        yield put({
            type: AUTH_LOGIN_SUCCESS,
            payload: {
                token: "KL4J2K3423NB23423.K234L23K4J234KNDMFNJN23JKRN2J3RK.3M4NM,324N32MNFMDSF,M",
            },
        });
    } catch (error) {
        yield put({ type: AUTH_LOGIN_FAILURE });
    }
}

function* logout() {
    try {
        yield put({
            type: AUTH_LOGOUT_SUCCESS,
        });
    } catch (error) {
        yield put({ type: AUTH_LOGOUT_FAILURE });
    }
}

export default {
    login,
    logout,
};
