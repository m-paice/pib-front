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
