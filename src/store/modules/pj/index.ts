import { Reducer } from "redux";

// pj reducers
import { reducers as reducersUsers } from "./users";
import { reducers as reducersCompanies } from "./company";
import { reducers as reducersDebts } from "./debt";
import { reducers as reducersNegociations } from "./negociation";

// pj types
import { StateUser } from "./users/types";
import { StateCompany } from "./company/types";
import { StateDebt } from "./debt/types";
import { StateNegociation } from "./negociation/types";

export interface StatePJ {
    users: StateUser;
    companies: StateCompany;
    debts: StateDebt;
    negociations: StateNegociation;
}

export const reducers: Reducer = (state = {}, actions) => ({
    users: reducersUsers(state, actions),
    companies: reducersCompanies(state, actions),
    debts: reducersDebts(state, actions),
    negociations: reducersNegociations(state, actions),
});
