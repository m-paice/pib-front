import { put, call, select } from "redux-saga/effects";

import { types } from "./types";

import history from "../../../utils/history";

import { tokenAuthenticated } from "./selectors";

import api from "../../../service/api";

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
};
