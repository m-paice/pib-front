import { combineReducers } from "redux";

import { reducers as reducerAuth } from "./auth";

// pf reducers
import { reducers as reducersPf } from "./pf";

// pj reducers
import { reducers as reducersPj } from "./pj";

// association reducers
import { reducers as reducersAssociation } from "./association";

const rootReducers = combineReducers({
    auth: reducerAuth,
    pf: reducersPf,
    pj: reducersPj,
    association: reducersAssociation,
});

export default rootReducers;
