import { combineReducers } from "redux";

import { reducers as reducerAuth } from "./auth";

// pf reducers
import { reducers as reducersPf } from "./pf";

// pj reducers
import { reducers as reducersPj } from "./pj";

const rootReducers = combineReducers({
    auth: reducerAuth,
    pf: reducersPf,
    pj: reducersPj,
});

export default rootReducers;
