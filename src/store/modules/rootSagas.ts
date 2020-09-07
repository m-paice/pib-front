import { all, takeLatest } from "redux-saga/effects";

// types
import { types as typesAuth } from "./auth/types";
// types pj
import { types as typesPjCompany } from "./pj/company/types";
import { types as typesPjDebt } from "./pj/debt/types";

// sagas
import authSagas from "./auth/sagas";
// sagas pj
import companyPjSagas from "./pj/company/sagas";
import debtPjSagas from "./pj/debt/sagas";

export default function* () {
    return yield all([
        // auth
        takeLatest(typesAuth.AUTH_LOGIN, authSagas.login),
        takeLatest(typesAuth.AUTH_LOGOUT, authSagas.logout),
        // pj
        takeLatest(typesPjCompany.ADD_COMPANY, companyPjSagas.createCompany),
        takeLatest(typesPjDebt.ADD_DEBT, debtPjSagas.createDebt),
    ]);
}
