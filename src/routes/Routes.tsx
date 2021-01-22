import React from "react";

import { Router } from "react-router";
import { Route, Switch, Redirect } from "react-router-dom";

import history from "../utils/history";

// layout
import DashboardLayoutPf from "./DashboardLayoutPf";
import DashboardLayoutPj from "./DashboardLayoutPj";
import DashboardLayoutAssociation from "./DashboardLayoutAssociation";
import PublicLayout from "./PublicLayout";

// pages
import Panel from "../pages/Panel";
import PanelPj from "../pages/PanelPj";
import Tips from "../pages/Tips";
import Offers from "../pages/Offers";
import Help from "../pages/Help";
import Profile from "../pages/Profile";
import Debits from "../pages/Debits";
import DebtorBase from "../pages/DebtorBase";
import Contact from "../pages/Contact";
import RuleNegociation from "../pages/RuleNegociation";
import FinancialReport from "../pages/FinancialReport";
import Balance from "../pages/Balance";
import Shopkeepers from "../pages/Shopkeepers";

import RegisterClient from "../pages/RegisterClient";
import Register from "../pages/Register";
import RegisterPj from "../pages/RegisterPj";

import Login from "../pages/Login";

const Routes: React.FC = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route exact path="/login" component={Login} />

                {/* views public */}
                <PublicLayout exact path="/register-client" component={RegisterClient} />
                <PublicLayout exact path="/register" component={Register} />
                <PublicLayout exact path="/registerpj" component={RegisterPj} />

                {/* views pf */}
                <DashboardLayoutPf exact path="/pf" component={Panel} />
                <DashboardLayoutPf exact path="/debits" component={Debits} />
                <DashboardLayoutPf exact path="/tips" component={Tips} />
                <DashboardLayoutPf exact path="/offers" component={Offers} />
                <DashboardLayoutPf exact path="/help" component={Help} />
                <DashboardLayoutPf exact path="/profile" component={Profile} />
                <DashboardLayoutPf exact path="/contact" component={Contact} />

                {/** views pj */}
                <DashboardLayoutPj exact path="/pj" component={Balance} />
                <DashboardLayoutPj exact path="/debitorBase" component={DebtorBase} />
                <DashboardLayoutPj exact path="/ruleNegociation" component={RuleNegociation} />
                <DashboardLayoutPj exact path="/financialReport" component={FinancialReport} />
                <DashboardLayoutPj exact path="/balance" component={Balance} />

                {/* views associacao */}
                <DashboardLayoutAssociation exact path="/associacao" component={Balance} />
                <DashboardLayoutAssociation exact path="/shopkeepers" component={Shopkeepers} />
            </Switch>
        </Router>
    );
};

export default Routes;
