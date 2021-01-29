import { put } from "redux-saga/effects";

import { types } from "./types";

function* showNotification() {
    yield put({
        type: types.SHOW_NOTIFICATION_SUCCESS,
        payload: true,
    });
}

function* hideNotification() {
    yield put({
        type: types.HIDE_NOTIFICATION_SUCCESS,
        payload: false,
    });
}

export default {
    showNotification,
    hideNotification,
};
