import { createSelector } from "reselect";

import { Debt } from "./types";
// common selectors
import { getElements } from "../../common/selectors";
// application interface
import { ApplicationState } from "./../../../index";

export const stateDebts = (state: ApplicationState) => getElements<Debt>(state.pf.debts);
export const stateCompaniesById = (state: ApplicationState) => state.pj.companies.byId;

export const selectDebts = createSelector(stateDebts, stateCompaniesById, (debts, companies) => {
    return debts
        .filter((debt) => debt.situation !== 0)
        .map((debt) => ({
            ...debt,
            company: companies[debt.companyId],
        }));
});

export const selectDebtsPending = createSelector(stateDebts, stateCompaniesById, (debts, companies) => {
    return debts
        .filter((debt) => debt.situation === 0)
        .map((debt) => ({
            ...debt,
            company: companies[debt.companyId],
        }));
});

export const valueTotalDebts = createSelector(stateDebts, (debts) =>
    debts.filter((debt) => debt.situation === 0).reduce((acc, cur) => acc + cur.debt, 0),
);
export const amountDebts = createSelector(stateDebts, (debts) => debts.filter((debt) => debt.situation === 0).length);
