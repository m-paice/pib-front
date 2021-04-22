import React from "react";

import { WrapperNav } from "./styles";

interface Props {}

const Nav: React.FC<Props> = ({ children }) => {
    return (
        <WrapperNav>
            <ul>
                <li>
                    {" "}
                    <a href="#conhecer"> item </a>{" "}
                </li>
                <li> item </li>
                <li> item </li>
                <li> item </li>
            </ul>
        </WrapperNav>
    );
};

export default Nav;
