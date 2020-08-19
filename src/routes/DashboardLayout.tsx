import React from "react";

import { Route } from "react-router-dom";

import Layout from "../pages/Layout";

interface PropsLayout {
    exact: boolean;
    path: string;
    component: React.ReactType;
}

const DashboardLayout: React.FC<PropsLayout> = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <Layout>
                    <Component {...matchProps} />
                </Layout>
            )}
        />
    );
};

export default DashboardLayout;
