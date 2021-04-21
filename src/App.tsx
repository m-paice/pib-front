import React from "react";

import Routes from "./Routes/PublicRoute";

import { ThemeContextProvider } from "./Context/ThemeContext";

const App: React.FC = () => {
    return (
        <ThemeContextProvider>
            <Routes />
        </ThemeContextProvider>
    );
};

export default App;
