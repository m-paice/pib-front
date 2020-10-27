import React from "react";

import Header from "../../../components/HeaderPf";
import Footer from "../../../components/Footer";

const LayoutPf: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default LayoutPf;
