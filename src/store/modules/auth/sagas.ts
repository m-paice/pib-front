import { put, take } from "redux-saga/effects";

import { types } from "./types";
import { types as typesPfDebits } from "../pf/debt/types";
import { types as typesPjDebtor } from "../pj/debtor/types";

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

        const typeUserAuthenticated = data[payload.document].type;

        if (typeUserAuthenticated === "pf") {
            yield put({ type: typesPfDebits.LOAD_DEBT });
            yield take(typesPfDebits.LOAD_DEBT_SUCCESS);
        }
        if (typeUserAuthenticated === "pj") {
            yield put({ type: typesPjDebtor.LOAD_DEBTOR });
            yield take(typesPjDebtor.LOAD_DEBTOR_SUCCESS);
        }

        history.push("/" + typeUserAuthenticated);
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
