import { put, take, call } from "redux-saga/effects";

import { types } from "./types";
import { types as typesPfDebits } from "../pf/debt/types";
import { types as typesPjDebtor } from "../pj/debtor/types";

import history from "../../../utils/history";

import api from "../../../service/api";

function* login(action) {
    const { payload } = action;

    try {
        const response = yield call(api.post, "/auth", payload);

        yield put({
            type: types.AUTH_LOGIN_SUCCESS,
            payload: {
                token: response.data.token,
                user: response.data.user,
            },
        });

        const typeUserAuthenticated = response.data.user;

        // if (typeUserAuthenticated === "pf") {
        //     yield put({ type: typesPfDebits.LOAD_DEBT });
        //     yield take(typesPfDebits.LOAD_DEBT_SUCCESS);
        // }
        // if (typeUserAuthenticated === "pj") {
        //     yield put({ type: typesPjDebtor.LOAD_DEBTOR });
        //     yield take(typesPjDebtor.LOAD_DEBTOR_SUCCESS);
        // }

        // history.push("/" + typeUserAuthenticated);
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
