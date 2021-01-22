import { createSelector } from "reselect";
import { addMonths } from "date-fns";

import { Debtor } from "./types";
// common selectors
import { getElements } from "../../common/selectors";
// application interface
import { ApplicationState } from "./../../../index";

import formatDate from "../../../../utils/formatDate";

export const stateDebtor = (state: ApplicationState) => getElements<Debtor>(state.pj.debtors);

export const dataDebtor = createSelector(stateDebtor, (debtorsItems) => debtorsItems);

// receive debtors value next 30 days
export const receiveDebtorsValueNextDays = createSelector(stateDebtor, (debtorsItems) => {
    const response = debtorsItems.reduce((acc, cur) => {
        if (!cur.negociacao) return acc;

        return (
            acc +
            cur.negociacao.parcelas
                .filter(
                    (item) =>
                        item.situacao !== "atraso" &&
                        new Date(item.vencimento) > new Date() &&
                        new Date(item.vencimento) < addMonths(new Date(), 1),
                )
                .reduce((acc, cur) => acc + cur.valorParcela, 0)
        );
    }, 0);

    return response;
});

// delay value
export const delayDebtorsValue = createSelector(stateDebtor, (debtorsItems) => {
    const response = debtorsItems.reduce((acc, cur) => {
        if (!cur.negociacao) return acc;

        return (
            acc +
            cur.negociacao.parcelas
                .filter(
                    (item) =>
                        item.situacao === "atraso" &&
                        new Date(item.vencimento) > new Date() &&
                        new Date(item.vencimento) < addMonths(new Date(), 1),
                )
                .reduce((acc, cur) => acc + cur.valorParcela, 0)
        );
    }, 0);

    return response;
});

// names form payment
export const namesDebtorsPayments = createSelector(stateDebtor, (debtorsItems) =>
    debtorsItems.reduce((acc: string[], cur) => {
        if (acc.length !== 0 && cur.negociacao && acc.includes(cur.negociacao.formaPagamento)) return acc;
        return [...acc, cur.negociacao ? cur.negociacao.formaPagamento : ""];
    }, []),
);

// flow receivement (situation portion [0,1])
export const receivedDebtorsPortion = createSelector(stateDebtor, (debtorsItems) => {
    return debtorsItems.map((item) => {
        if (item.negociacao && item.negociacao.parcelas.length === 0) return null;

        return item.negociacao && item.negociacao.parcelas.filter((item) => item.situacao !== "em dia").length !== 0
            ? item.negociacao &&
                  item.negociacao.parcelas.reduce((acc, cur) => {
                      return {
                          ...acc,
                          [formatDate(new Date(cur.vencimento))]: cur.valorParcela,
                      };
                  }, {})
            : null;
    });
});

// amount debtors pf
export const amountDebtorsPf = createSelector(stateDebtor, (debtorsItems) => {
    const mapDocument: {
        [key: string]: number;
    } = debtorsItems.reduce((acc, cur) => {
        if (acc[cur.consumidor.cpf]) return acc;

        return {
            ...acc,
            [cur.consumidor.cpf]: (acc[cur.consumidor.cpf] || 0) + 1,
        };
    }, {});

    const response = Object.values(mapDocument).reduce((acc, cur) => acc + cur, 0);

    return response;
});

// amount debt for pf
export const amountDetorsDebtsPf = createSelector(stateDebtor, (debtorsItems) => {
    const mapDocument = debtorsItems.reduce((acc, cur) => {
        return {
            ...acc,
            [cur.consumidor.cpf]: (acc[cur.consumidor.cpf] || 0) + 1,
        };
    }, {});

    return Object.values(mapDocument).reduce((acc: number, cur: number) => acc + cur, 0);
});

// amount debts
export const amountDetorsWallet = createSelector(stateDebtor, (debtorsItems) => {
    return debtorsItems.reduce((acc, cur) => {
        return acc + cur.valor;
    }, 0);
});
