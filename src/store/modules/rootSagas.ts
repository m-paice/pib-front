import { all, takeLatest } from "redux-saga/effects";

// types
import { types as typesAuth } from "./auth/types";
// types pj
import { types as typesPjCompany } from "./pj/company/types";
import { types as typesPjDebt } from "./pj/debt/types";
import { types as typesPjNegociation } from "./pj/negociation/types";
import { types as typesPjWallet } from "./pj/wallet/types";

// sagas
import authSagas from "./auth/sagas";
// sagas pj
import companyPjSagas from "./pj/company/sagas";
import debtPjSagas from "./pj/debt/sagas";
import negociationPjSagas from "./pj/negociation/sagas";
import walletPjSagas from "./pj/wallet/sagas";

export default function* () {
    return yield all([
        // auth
        takeLatest(typesAuth.AUTH_LOGIN, authSagas.login),
        takeLatest(typesAuth.AUTH_LOGOUT, authSagas.logout),
        /* PJ **/
        // company
        takeLatest(typesPjCompany.ADD_COMPANY, companyPjSagas.createCompany),
        // debit
        takeLatest(typesPjDebt.ADD_DEBT, debtPjSagas.createDebt),
        // negociation
        takeLatest(typesPjNegociation.LOAD_NEGOCIATION, negociationPjSagas.loadNegociation),
        // wallet
        takeLatest(typesPjWallet.LOAD_WALLET, walletPjSagas.loadNegociation),
        takeLatest(typesPjWallet.ADD_WALLET, walletPjSagas.addItemWallet),
    ]);
}
