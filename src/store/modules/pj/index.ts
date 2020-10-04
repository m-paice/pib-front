import { Reducer } from "redux";

// pj reducers
import { reducers as reducersUsers } from "./users";
import { reducers as reducersCompanies } from "./company";
import { reducers as reducersDebts } from "./debt";
import { reducers as reducersNegociations } from "./negociation";
import { reducers as reducersWallet } from "./wallet";
import { reducers as reducersDebtors } from "./debtor";

// pj types
import { StateUser } from "./users/types";
import { StateCompany } from "./company/types";
import { StateDebt } from "./debt/types";
import { StateNegociation } from "./negociation/types";
import { StateWallet } from "./wallet/types";
import { StateDebtor } from "./debtor/types";

export interface StatePJ {
    users: StateUser;
    companies: StateCompany;
    debts: StateDebt;
    negociations: StateNegociation;
    wallet: StateWallet;
    debtors: StateDebtor;
}

export const reducers: Reducer = (state = {}, actions) => ({
    users: reducersUsers(state.users, actions),
    companies: reducersCompanies(state.companies, actions),
    debts: reducersDebts(state.debts, actions),
    negociations: reducersNegociations(state.negociations, actions),
    wallet: reducersWallet(state.wallet, actions),
    debtors: reducersDebtors(state.debtors, actions),
});
