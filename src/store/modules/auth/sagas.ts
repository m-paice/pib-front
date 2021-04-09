import { put, call, select } from "redux-saga/effects";

import { types } from "./types";
import { types as typesNegociation } from "../pj/negociation/types";
import { types as typesWallet } from "../pj/wallet/types";

import history from "../../../utils/history";

import { tokenAuthenticated } from "./selectors";

import api from "../../../service/api";

function* loginWithCertificate(action) {
    const { payload } = action;

    try {
        yield put({
            type: types.AUTH_LOGIN_SUCCESS,
            payload: {
                token: payload.token,
                user: payload.user,
            },
        });

        yield (api.defaults.headers["Authorization"] = `Bearer ${payload.token}`);

        const typeUserAuthenticated = yield payload.document;

        if (typeUserAuthenticated === "pj") {
            yield put({
                type: typesNegociation.LOAD_NEGOCIATION,
            });

            yield put({
                type: typesWallet.LOAD_WALLET,
            });
        }

        yield history.push("/" + typeUserAuthenticated);
    } catch (error) {
        yield put({ type: types.AUTH_LOGIN_FAILURE });
    }
}

function* login(action) {
    const { payload } = action;

    try {
        const response = yield call(api.post, "/auth", payload);

        if (response.data.status && response.data.status === 500) {
            yield put({ type: types.AUTH_LOGIN_FAILURE, payload: response.data.message });

            return;
        }

        yield put({
            type: types.AUTH_LOGIN_SUCCESS,
            payload: {
                token: response.data.token,
                user: response.data.user,
            },
        });

        yield (api.defaults.headers["Authorization"] = `Bearer ${response.data.token}`);

        const typeUserAuthenticated = yield response.data.document;

        if (typeUserAuthenticated === "pj") {
            yield put({
                type: typesNegociation.LOAD_NEGOCIATION,
            });

            yield put({
                type: typesWallet.LOAD_WALLET,
            });
        }

        yield history.push("/" + typeUserAuthenticated);
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

function* reLogin() {
    const token = yield select(tokenAuthenticated);

    if (token) yield (api.defaults.headers["Authorization"] = `Bearer ${token}`);
}

export default {
    login,
    logout,
    reLogin,
    loginWithCertificate,
};
