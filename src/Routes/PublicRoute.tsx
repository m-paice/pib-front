import React from "react";

import { Router } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import history from "../Utils/history";

import PublicLayout from "./PublicLayout";

import Home from "../Pages/Home";
import Celulas from "../Pages/Celulas";
import Ministerios from "../Pages/Ministerios";

import GlobalStyles from "../Styles/globalStyles";
import { darkTheme, lightTheme } from "../Themes/default";

import { useThemeContext } from "../Context/ThemeContext";

interface Props {}

const PublicRoute: React.FC<Props> = ({ children }) => {
    const { theme } = useThemeContext();

    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Router history={history}>
                <Switch>
                    <PublicLayout path="/" exact component={Home} />
                    <PublicLayout path="/celulas" exact component={Celulas} />
                    <PublicLayout path="/ministerios" exact component={Ministerios} />
                </Switch>
            </Router>

            <GlobalStyles />
        </ThemeProvider>
    );
};

export default PublicRoute;
