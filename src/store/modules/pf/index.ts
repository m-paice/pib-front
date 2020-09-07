import { Reducer } from "redux";

// pf reducers
import { reducers as reducersUsers } from "./users";

import { StateUser } from "./users/types";

export interface StatePF {
    users: StateUser;
}

export const reducers: Reducer = (state = {}, actions) => ({
    users: reducersUsers(state, actions),
});
