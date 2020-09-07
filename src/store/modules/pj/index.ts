import { Reducer } from "redux";

// pj reducers
import { reducers as reducersUsers } from "./users";
import { reducers as reducersCompanies } from "./company";
import { reducers as reducersDebts } from "./debt";

// pj types
import { StateUser } from "./users/types";
import { StateCompany } from "./company/types";
import { StateDebt } from "./debt/types";

export interface StatePJ {
    users: StateUser;
    companies: StateCompany;
    debts: StateDebt;
}

export const reducers: Reducer = (state = {}, actions) => ({
    users: reducersUsers(state, actions),
    companies: reducersCompanies(state, actions),
    debts: reducersDebts(state, actions),
});
