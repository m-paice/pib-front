import { createSelector } from "reselect";

import { Debt } from "./types";
// common selectors
import { getElements } from "../../common/selectors";
// application interface
import { ApplicationState } from "./../../../index";

export const stateDebts = (state: ApplicationState) => getElements<Debt>(state.pf.debts);

/**
 * regras de situacao
 * [0] - quero negociar
 * [1] - em atraso
 * [2] - em dia
 * [3] - quitada
 */

export const selectDebts = createSelector(stateDebts, (debts) => {
    return debts.sort((a, b) => (a.situation > b.situation ? 1 : -1));
});

// quantidade de debitos abertos (que não estão quitados)
export const amountDebitsOpened = createSelector(
    stateDebts,
    (debits) => debits.filter((item) => item.situation !== 3).length,
);

// debitos quitados
export const debitsPaid = createSelector(
    stateDebts,
    (debits) => debits.length !== 0 && debits.every((item) => item.situation === 3),
);

// quantidade de debitos quitadas
export const amountDebitsPaidOut = createSelector(
    stateDebts,
    (debits) => debits.filter((item) => item.situation === 3).length,
);

// debitos para negociar
export const selectDebtsPending = createSelector(stateDebts, (debts) => {
    return debts.filter((debt) => debt.situation === 0);
});

// valor total dos debitos
export const valueTotalDebts = createSelector(stateDebts, (debts) => debts.reduce((acc, cur) => acc + cur.debt, 0));

// quantidade total de debitos
export const amountDebts = createSelector(stateDebts, (debts) => debts.length);
