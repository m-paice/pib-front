import React from "react";

import { Route } from "react-router-dom";

import { LayoutPublic } from "../pages/Layout";

interface PropsLayout {
    exact: boolean;
    path: string;
    component: React.ElementType;
}

const PublicLayout: React.FC<PropsLayout> = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(matchProps) => (
                <LayoutPublic>
                    <Component {...matchProps} />
                </LayoutPublic>
            )}
        />
    );
};

export default PublicLayout;
