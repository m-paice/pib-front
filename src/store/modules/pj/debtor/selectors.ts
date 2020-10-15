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
    debtorsItems.filter((item) => item.situation === 1).reduce((acc, cur) => acc + cur.late, 0),
);

// names situations
export const namesDebtorsSituation = createSelector(stateDebtor, (debtorsItems) =>
    debtorsItems.reduce((acc: number[], cur) => {
        if (acc.length !== 0 && acc.includes(cur.situation)) return acc;
        return [...acc, cur.situation];
    }, []),
);

// amount items for situations
export const amountDebtorsSituation = createSelector(stateDebtor, (debtorsItems) =>
    debtorsItems.reduce((acc, cur) => {
        return {
            ...acc,
            [cur.situation]: (acc[cur.situation] || 0) + 1,
        };
    }, {}),
);
