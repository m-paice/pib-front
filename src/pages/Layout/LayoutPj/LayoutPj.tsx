import React from "react";

import Header from "../../../components/HeaderPj";
import Footer from "../../../components/Footer";

const LayoutPj: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default LayoutPj;
