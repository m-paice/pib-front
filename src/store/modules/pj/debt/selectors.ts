import { createSelector } from "reselect";

import { Debt } from "./types";
// common selectors
import { getElements } from "../../common/selectors";
// application interface
import { ApplicationState } from "./../../../index";

export const selectDebts = (state: ApplicationState) => getElements<Debt>(state.pj.debts);

export const valueTotalDebts = createSelector(selectDebts, (debts) => debts.reduce((acc, cur) => acc + cur.value, 0));
export const amountDebts = createSelector(selectDebts, (debts) => debts.length);
