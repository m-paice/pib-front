import React from "react";

import Routes from "./Routes/PublicRoute";

import { ThemeContextProvider } from "./Context/ThemeContext";

import "react-responsive-carousel/lib/styles/carousel.min.css";

const App: React.FC = () => {
    return (
        <ThemeContextProvider>
            <Routes />
        </ThemeContextProvider>
    );
};

export default App;
