import React from "react";

import { Route } from "react-router-dom";
// utils
import useVisibility from "../utils/useVisibilityApp";

import { LayoutAssociation } from "../pages/Layout";

interface PropsLayout {
    exact: boolean;
    path: string;
    component: React.ElementType;
}

const DashboardLayout: React.FC<PropsLayout> = ({ component: Component, ...rest }) => {
    // useVisibility();

    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <LayoutAssociation>
                    <Component {...matchProps} />
                </LayoutAssociation>
            )}
        />
    );
};

export default DashboardLayout;
