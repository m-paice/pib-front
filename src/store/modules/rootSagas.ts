import { all, takeLatest } from "redux-saga/effects";

import { TypesUser } from "./user/types";
import { TypesAuth } from "./auth/types";

import userSagas from "./user/sagas";
import authSagas from "./auth/sagas";

export default function* () {
    return yield all([
        // users
        takeLatest(TypesUser.ADD_USER, userSagas.createUser),
        // auth
        takeLatest(TypesAuth.AUTH_LOGIN, authSagas.login),
        takeLatest(TypesAuth.AUTH_LOGOUT, authSagas.logout),
    ]);
}
