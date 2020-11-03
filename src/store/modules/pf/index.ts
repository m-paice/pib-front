import { Reducer } from "redux";

// pf reducers

import { reducers as reducersDebts } from "./debt";

import { StateDebt } from "./debt/types";

export interface StatePF {
    debts: StateDebt;
}

export const reducers: Reducer = (state = {}, actions) => ({
    debts: reducersDebts(state.debts, actions),
});
