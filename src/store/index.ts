import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";

// root reducers and sagas
import rootReducers from "./modules/RootReducers";
import rootSagas from "./modules/rootSagas";

// default types application
import { Auth } from "./modules/auth/types";
import { StatePF } from "./modules/pf";
import { StatePJ } from "./modules/pj";

const persistConfig = {
    key: "root",
    storage,
};

export interface ApplicationState {
    auth: Auth;
    pf: StatePF;
    pj: StatePJ;
}

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducers);

export default () => {
    const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
    const persistor = persistStore(store);

    sagaMiddleware.run(rootSagas);

    return { store, persistor };
};
