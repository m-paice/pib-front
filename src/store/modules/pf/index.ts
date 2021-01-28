import { Reducer } from "redux";

// reducers
import { reducers as reducersDebts } from "./debt";

// types
import { StateDebt } from "./debt/types";

// states
export interface StatePF {
    debts: StateDebt;
}

export const reducers: Reducer = (state = {}, actions) => ({
    debts: reducersDebts(state.debts, actions),
});
