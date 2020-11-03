import { Reducer } from "redux";

// pj reducers
import { reducers as reducersCompanies } from "./company";

import { reducers as reducersNegociations } from "./negociation";
import { reducers as reducersWallet } from "./wallet";
import { reducers as reducersDebtors } from "./debtor";

// pj types
import { StateCompany } from "./company/types";

import { StateNegociation } from "./negociation/types";
import { StateWallet } from "./wallet/types";
import { StateDebtor } from "./debtor/types";

export interface StatePJ {
    companies: StateCompany;

    negociations: StateNegociation;
    wallet: StateWallet;
    debtors: StateDebtor;
}

export const reducers: Reducer = (state = {}, actions) => ({
    companies: reducersCompanies(state.companies, actions),
    negociations: reducersNegociations(state.negociations, actions),
    wallet: reducersWallet(state.wallet, actions),
    debtors: reducersDebtors(state.debtors, actions),
});
