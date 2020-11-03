import { put } from "redux-saga/effects";

import { types } from "./types";

import history from "../../../utils/history";

import data from "./data/users";

function* login(action) {
    const { payload } = action;

    if (!data[payload.document]) {
        return yield put({ type: types.AUTH_LOGIN_FAILURE });
    }

    try {
        yield put({
            type: types.AUTH_LOGIN_SUCCESS,
            payload: {
                token: "KL4J2K3423NB23423.K234L23K4J234KNDMFNJN23JKRN2J3RK.3M4NM,324N32MNFMDSF,M",
                user: data[payload.document],
            },
        });

        history.push("/" + data[payload.document].type);
    } catch (error) {
        yield put({ type: types.AUTH_LOGIN_FAILURE });
    }
}

function* logout() {
    try {
        yield put({
            type: types.AUTH_LOGOUT_SUCCESS,
        });
    } catch (error) {
        yield put({ type: types.AUTH_LOGOUT_FAILURE });
    }
}

export default {
    login,
    logout,
};
