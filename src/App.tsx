import React from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import storeRedux from "./store";

import Routes from "./routes";

import useVisibility from "./utils/useVisibilityApp";

import "normalize.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/App.css";

const App: React.FC = () => {
    const { persistor, store } = storeRedux();

    useVisibility();

    return (
        <div id="page">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Routes />
                </PersistGate>
            </Provider>
        </div>
    );
};

export default App;
