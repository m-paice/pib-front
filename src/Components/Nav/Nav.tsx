import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import { WrapperNav, NavWeb, NavMobile } from "./styles";

interface Props {}

const NavComponent: React.FC<Props> = ({ children }) => {
    const divRef = useRef<HTMLDivElement>(null);

    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const handleToggleActiveMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    };

    const handleClickLink = (event) => {
        console.log(event);

        if (divRef.current) {
            divRef.current.style.left = event.target.offsetLeft + "px";
            divRef.current.style.width = event.target.offsetWidth + "px";
        }
    };

    return (
        <WrapperNav>
            <NavWeb>
                <div className="marker" ref={divRef}></div>
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
            </NavWeb>

            <NavMobile>
                <button onClick={handleToggleActiveMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </button>

                {isActiveMenu && (
                    <div className="content">
                        <button onClick={handleToggleActiveMenu}>
                            {" "}
                            <FontAwesomeIcon icon={faTimes} />{" "}
                        </button>
                        <section>
                            <a onClick={handleToggleActiveMenu} href="#home">
                                Home
                            </a>
                            <a onClick={handleToggleActiveMenu} href="#about">
                                About
                            </a>
                            <a onClick={handleToggleActiveMenu} href="#services">
                                Services
                            </a>
                            <a onClick={handleToggleActiveMenu} href="#portifolio">
                                Portifolio
                            </a>
                            <a onClick={handleToggleActiveMenu} href="#team">
                                Team
                            </a>
                            <a onClick={handleToggleActiveMenu} href="#contact">
                                Contact
                            </a>
                        </section>
                    </div>
                )}
            </NavMobile>
        </WrapperNav>
    );
};

export default NavComponent;
