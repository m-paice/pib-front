import { all, takeLatest } from "redux-saga/effects";

// types
import { types as typesAuth } from "./auth/types";
import { types as typesUsers } from "./users/types";
// types pf
import { types as typesPfDebt } from "./pf/debt/types";
// types pj
import { types as typesPjNegociation } from "./pj/negociation/types";
import { types as typesPjWallet } from "./pj/wallet/types";
import { types as typesPjDebtors } from "./pj/debtor/types";
// types association
import { types as typesshopkeeper } from "./association/shopkeeper/types";
// types app
import { types as typesNotification } from "./app/notification/types";

// sagas
import authSagas from "./auth/sagas";
import usersSagas from "./users/sagas";
// sagas pf
import debtPfSagas from "./pf/debt/sagas";
// sagas pj
import negociationPjSagas from "./pj/negociation/sagas";
import walletPjSagas from "./pj/wallet/sagas";
import debtorPjSagas from "./pj/debtor/sagas";
// sagas association
import shopkeeperSagas from "./association/shopkeeper/sagas";
// sagas app
import notificationSagas from "./app/notification/sagas";

export default function* () {
    return yield all([
        // auth
        takeLatest(typesAuth.AUTH_LOGIN, authSagas.login),
        takeLatest(typesAuth.AUTH_LOGIN_CERTIFICATE, authSagas.loginWithCertificate),
        takeLatest(typesAuth.AUTH_LOGOUT, authSagas.logout),

        // users
        takeLatest(typesUsers.CREATE_USER, usersSagas.create),

        /** PF */
        // debt
        takeLatest(typesPfDebt.LOAD_DEBT, debtPfSagas.loadDebt),
        takeLatest(typesPfDebt.ADD_DEBT, debtPfSagas.createDebt),
        // negociation
        takeLatest(typesPfDebt.RENEGOTIATE_DEBT, debtPfSagas.renegotiateDebit),
        // payment
        takeLatest(typesPfDebt.PAYMENT_BILLET_DEBT, debtPfSagas.paymentBillet),

        /* PJ **/
        // negociation
        takeLatest(typesPjNegociation.LOAD_NEGOCIATION, negociationPjSagas.loadNegociation),
        takeLatest(typesPjNegociation.UPDATE_NEGOCIATION, negociationPjSagas.updateNegociation),
        // wallet
        takeLatest(typesPjWallet.LOAD_WALLET, walletPjSagas.load),
        // debtor
        takeLatest(typesPjDebtors.LOAD_DEBTOR, debtorPjSagas.loadDebtors),
        takeLatest(typesPjDebtors.CLOSE_OR_OPEN_DEBTOR, debtorPjSagas.closeOrOpenDebit),

        /** ASSOCIATION */
        takeLatest(typesshopkeeper.LOAD_SHOPKEEPER, shopkeeperSagas.loadShopkeepers),
        takeLatest(typesshopkeeper.UPDATE_SHOPKEEPER, shopkeeperSagas.updateShopkeeper),

        /** APP */
        takeLatest(typesNotification.SHOW_NOTIFICATION, notificationSagas.showNotification),
        takeLatest(typesNotification.HIDE_NOTIFICATION, notificationSagas.hideNotification),

        // init services
        takeLatest("persist/REHYDRATE", authSagas.reLogin),

        // init services for authenticated
        // takeLatest(typesAuth.AUTH_LOGIN_SUCCESS, companyPjSagas.loadCompanies),
        // takeLatest(typesAuth.AUTH_LOGIN_SUCCESS, negociationPjSagas.loadNegociation),
    ]);
}
