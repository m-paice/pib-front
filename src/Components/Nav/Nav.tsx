import React, { useRef } from "react";

import { WrapperNav, Nav } from "./styles";

interface Props {}

const NavComponent: React.FC<Props> = ({ children }) => {
    const divRef = useRef<HTMLDivElement>(null);

    const handleClickLink = (event) => {
        console.log(event);

        if (divRef.current) {
            divRef.current.style.left = event.target.offsetLeft + "px";
            divRef.current.style.width = event.target.offsetWidth + "px";
        }
    };

    return (
        <WrapperNav>
            <Nav>
                <div id="marker" ref={divRef}></div>
                <a onClick={handleClickLink} href="#home">
                    Home
                </a>
                <a onClick={handleClickLink} href="#about">
                    About
                </a>
                <a onClick={handleClickLink} href="#services">
                    Services
                </a>
                <a onClick={handleClickLink} href="#portifolio">
                    Portifolio
                </a>
                <a onClick={handleClickLink} href="#team">
                    Team
                </a>
                <a onClick={handleClickLink} href="#contact">
                    Contact
                </a>
            </Nav>
        </WrapperNav>
    );
};

export default NavComponent;
