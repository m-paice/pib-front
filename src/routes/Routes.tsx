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
import Register from "../pages/Register";

const Routes: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/panel" />
                </Route>
                <Route path="/login" component={() => <h1> Login </h1>} />
                {/* dashboard */}
                <DashboardLayout exact path="/panel" component={Panel} />
                <DashboardLayout exact path="/tips" component={Tips} />
                <DashboardLayout exact path="/offers" component={Offers} />
                <DashboardLayout exact path="/help" component={Help} />
                <DashboardLayout exact path="/profile" component={Profile} />
                <DashboardLayout exact path="/debits" component={Debits} />
                <DashboardLayout exact path="/debitorBase" component={DebtorBase} />

                <DashboardLayout exact path="/register" component={Register} />
            </Switch>
        </Router>
    );
};

export default Routes;
