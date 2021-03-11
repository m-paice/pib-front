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

export const status = {
    processing: 0,
    atrasado: 1,
    ["em dia"]: 2,
    quitado: 3,
    recusado: 4,
};

export const selectDebts = createSelector(stateDebts, (debts) => {
    return debts.sort((a, b) => (status[a.status] > status[b.status] ? 1 : -1));
});

// todos os debitos quitados
export const allDebtsPaidOut = createSelector(stateDebts, (debts) => {
    return debts.every((item) => item.negociacao && item.negociacao.situacao === "quitado");
});

// quantidade de debitos abertos (que não estão quitados)
export const amountDebitsOpened = createSelector(
    stateDebts,
    (debits) =>
        debits.filter((item) => !item.negociacao?.parcelas.some((parcela) => parcela.situacao === "pago")).length,
);

// todos os debitos negociados e pelo menos uma parcela paga
export const debitsPaid = createSelector(stateDebts, (debits) =>
    debits.every((item) => item.negociacao && item.negociacao.parcelas.some((parcela) => parcela.situacao === "pago")),
);

// quantidade de debitos quitadas
export const amountDebitsPaidOut = createSelector(
    stateDebts,
    (debits) => debits.filter((item) => status[item.status] === 3).length,
);

// debitos para negociar
export const selectDebtsPending = createSelector(stateDebts, (debts) => {
    return debts.filter((debt) => status[debt.status] === 0);
});

// valor total dos debitos
export const valueTotalDebts = createSelector(stateDebts, (debts) =>
    debts
        .filter((debit) => !debit.negociacao?.parcelas.some((parcela) => parcela.situacao === "pago"))
        .reduce((acc, cur) => acc + cur.valor, 0),
);

// quantidade total de debitos
export const amountDebts = createSelector(
    stateDebts,
    (debts) =>
        debts.filter((debit) => !debit.negociacao?.parcelas.some((parcela) => parcela.situacao === "pago")).length,
);
