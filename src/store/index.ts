import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// root reducers and sagas
import rootReducers from "./modules/RootReducers";

// types
import { User } from "./modules/user/types";
import { Auth } from "./modules/auth/types";

const persistConfig = {
    key: "root",
    storage,
};

export interface ApplicationState {
    auth: Auth;
    users: User;
}

const persistedReducer = persistReducer(persistConfig, rootReducers);

export default () => {
    const store = createStore(persistedReducer);
    const persistor = persistStore(store);

    return { store, persistor };
};
