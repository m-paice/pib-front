import { combineReducers } from "redux";

import auth from "./auth";
import users from "./user";

const rootReducers = combineReducers({
    auth,
    users,
});

export default rootReducers;
