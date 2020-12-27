import { all, takeLatest } from "redux-saga/effects";

// types
import { types as typesAuth } from "./auth/types";
import { types as typesUsers } from "./users/types";
// types pf
import { types as typesPfDebt } from "./pf/debt/types";
// types pj
import { types as typesPjCompany } from "./pj/company/types";
import { types as typesPjNegociation } from "./pj/negociation/types";
import { types as typesPjWallet } from "./pj/wallet/types";
import { types as typesPjDebtors } from "./pj/debtor/types";

// sagas
import authSagas from "./auth/sagas";
import usersSagas from "./users/sagas";
// sagas pf
import debtPfSagas from "./pf/debt/sagas";
// sagas pj
import companyPjSagas from "./pj/company/sagas";
import negociationPjSagas from "./pj/negociation/sagas";
import walletPjSagas from "./pj/wallet/sagas";
import debtorPjSagas from "./pj/debtor/sagas";

export default function* () {
    return yield all([
        // auth
        takeLatest(typesAuth.AUTH_LOGIN, authSagas.login),
        takeLatest(typesAuth.AUTH_LOGOUT, authSagas.logout),

        // users
        takeLatest(typesUsers.CREATE_USER, usersSagas.create),

        /** PF */
        // debt
        takeLatest(typesPfDebt.LOAD_DEBT, debtPfSagas.loadDebt),

        /* PJ **/
        // company
        takeLatest(typesPjCompany.LOAD_COMPANY, companyPjSagas.loadCompanies),
        takeLatest(typesPjCompany.ADD_COMPANY, companyPjSagas.createCompany),
        // negociation
        takeLatest(typesPjNegociation.LOAD_NEGOCIATION, negociationPjSagas.loadNegociation),
        takeLatest(typesPjNegociation.UPDATE_NEGOCIATION, negociationPjSagas.updateNegociation),
        // wallet
        takeLatest(typesPjWallet.LOAD_WALLET, walletPjSagas.loadNegociation),
        takeLatest(typesPjWallet.ADD_WALLET, walletPjSagas.addItemWallet),
        // debtor
        takeLatest(typesPjDebtors.LOAD_DEBTOR, debtorPjSagas.loadDebtors),

        // init services
        takeLatest("persist/REHYDRATE", authSagas.reLogin),
        takeLatest("persist/REHYDRATE", debtPfSagas.loadDebt),

        // init services for authenticated
        takeLatest(typesAuth.AUTH_LOGIN_SUCCESS, companyPjSagas.loadCompanies),
        takeLatest(typesAuth.AUTH_LOGIN_SUCCESS, negociationPjSagas.loadNegociation),
    ]);
}
