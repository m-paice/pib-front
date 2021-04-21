import React from "react";

import { WrapperNav } from "./styles";

interface Props {}

const Nav: React.FC<Props> = ({ children }) => {
    return (
        <WrapperNav>
            <ul>
                <li> Conhecer </li>
                <li> Eventos </li>
                <li> Pastores </li>
                <li> Contato </li>
            </ul>
        </WrapperNav>
    );
};

export default Nav;
