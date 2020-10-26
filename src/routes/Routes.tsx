import React from "react";

import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// layout
import DashboardLayout from "./DashboardLayout";

// pages
import Panel from "../pages/Panel";
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

import Register from "../pages/Register";
import RegisterPj from "../pages/RegisterPj";

import Login from "../pages/Login";

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login" />
                </Route>
                <Route path="/login" component={Login} />
                {/* dashboard */}
                <DashboardLayout exact path="/homepf" component={Panel} />
                <DashboardLayout exact path="/tips" component={Tips} />
                <DashboardLayout exact path="/offers" component={Offers} />
                <DashboardLayout exact path="/help" component={Help} />
                <DashboardLayout exact path="/profile" component={Profile} />
                <DashboardLayout exact path="/debits" component={Debits} />
                <DashboardLayout exact path="/debitorBase" component={DebtorBase} />

                <DashboardLayout exact path="/contact" component={Contact} />
                <DashboardLayout exact path="/ruleNegociation" component={RuleNegociation} />
                <DashboardLayout exact path="/financialReport" component={FinancialReport} />
                <DashboardLayout exact path="/balance" component={Balance} />
                <DashboardLayout exact path="/register" component={Register} />
                <DashboardLayout exact path="/registerpj" component={RegisterPj} />
            </Switch>
        </Router>
    );
};

export default Routes;
