import React from "react";

import { Route } from "react-router-dom";

import Nav from "../Components/Nav";
import Footer from "../Components/Footer";

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
                <>
                    <Nav />
                    <Component {...matchProps} />
                    <Footer />
                </>
            )}
        />
    );
};

export default PublicLayout;
