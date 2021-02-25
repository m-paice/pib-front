import React from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import storeRedux from "./store";

import Routes from "./routes";

// context
import { UserProvider } from "./context/usuario";

import "normalize.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/App.css";
import "./styles/screens.css";

const App: React.FC = () => {
    const { persistor, store } = storeRedux();

    return (
        <div id="page">
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <UserProvider>
                        <Routes />
                    </UserProvider>
                </PersistGate>
            </Provider>
        </div>
    );
};

export default App;
