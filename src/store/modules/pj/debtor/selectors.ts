import { createSelector } from "reselect";

import { Debtor } from "./types";
// common selectors
import { getElements } from "../../common/selectors";
// application interface
import { ApplicationState } from "./../../../index";

export const stateDebtor = (state: ApplicationState) => getElements<Debtor>(state.pj.debtors);

export const dataDebtor = createSelector(stateDebtor, (debtorsItems) =>
    debtorsItems.sort((a, b) => (a.dateRegister > b.dateRegister ? 1 : -1)).map((debtorItem) => debtorItem),
);

// receive debtors value next 30 days
export const receiveDebtorsValueNextDays = createSelector(stateDebtor, (debtorsItems) => {
    /**
     * REGRAS APLICADAS:
     * filtrar todos os que a parcela for PROXIMO (situation === 0)
     * Pegar somento os debitos do mês seguinte
     * Somar as parcelas
     * Somar o total das parcelas
     */
    const response: number = debtorsItems
        .reduce((acc, cur) => {
            return [
                ...acc,
                cur.detailsPortion
                    .filter(
                        (item) =>
                            item.situation === 0 && new Date(item.dueDate).getMonth() + 1 === new Date().getMonth() + 2,
                    )
                    .reduce((acc, cur) => {
                        return acc + cur.valuePortion;
                    }, 0),
            ];
        }, [])
        .reduce((acc, cur) => acc + cur, 0);

    return response;
});

// delay value
export const delayDebtorsValue = createSelector(stateDebtor, (debtorsItems) =>
    debtorsItems
        .filter((item) => item.situation === 1)
        .reduce((acc, cur) => {
            return acc + cur.detailsPortion.reduce((acc, cur) => acc + cur.valuePortion, 0);
        }, 0),
);

// names form payment
export const namesDebtorsPayments = createSelector(stateDebtor, (debtorsItems) =>
    debtorsItems.reduce((acc: number[], cur) => {
        if (acc.length !== 0 && acc.includes(cur.payment)) return acc;
        return [...acc, cur.payment];
    }, []),
);

// flow receivement (situation portion [0,1])
export const receivedDebtorsPortion = createSelector(stateDebtor, (debtorsItems) => {
    const currentDate = new Date();

    return debtorsItems.reduce((acc, cur, index) => {
        return {
            ...acc,
            [cur.id]: cur.detailsPortion
                .filter(
                    (item) =>
                        item.situation !== 3 && new Date(item.dueDate).getMonth() === new Date().getMonth() + index + 1,
                )
                .reduce((acc, cur) => acc + cur.valuePortion, 0),
        };
    }, {});
});

// amount debtors pf
export const amountDebtorsPf = createSelector(stateDebtor, (debtorsItems) => {
    const mapDocument = debtorsItems.reduce((acc, cur) => {
        if (acc[cur.document]) return acc;

        return {
            ...acc,
            [cur.document]: (acc[cur.document] || 0) + 1,
        };
    }, {});

    return Object.values(mapDocument).reduce((acc: number, cur: number) => acc + cur, 0);
});

// amount debt for pf
export const amountDetorsDebtsPf = createSelector(stateDebtor, (debtorsItems) => {
    const mapDocument = debtorsItems.reduce((acc, cur) => {
        return {
            ...acc,
            [cur.document]: (acc[cur.document] || 0) + 1,
        };
    }, {});

    return Object.values(mapDocument).reduce((acc: number, cur: number) => acc + cur, 0);
});

// amount debts
export const amountDetorsWallet = createSelector(stateDebtor, (debtorsItems) => {
    const mapDocument = debtorsItems.reduce((acc, cur) => {
        return {
            ...acc,
            [cur.document]: (acc[cur.document] || 0) + cur.debit,
        };
    }, {});

    return Object.values(mapDocument).reduce((acc: number, cur: number) => acc + cur, 0);
});
