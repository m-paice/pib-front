import { Reducer } from "redux";

// reducers
import { reducers as reducersNegociations } from "./negociation";
import { reducers as reducersWallet } from "./wallet";
import { reducers as reducersDebtors } from "./debtor";

// types
import { StateNegociation } from "./negociation/types";
import { StateWallet } from "./wallet/types";
import { StateDebtor } from "./debtor/types";

// states
export interface StatePJ {
    negociations: StateNegociation;
    wallet: StateWallet;
    debtors: StateDebtor;
}

export const reducers: Reducer = (state = {}, actions) => ({
    negociations: reducersNegociations(state.negociations, actions),
    wallet: reducersWallet(state.wallet, actions),
    debtors: reducersDebtors(state.debtors, actions),
});
