import React, { useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import { WrapperNav, NavWeb, NavMobile } from "./styles";

interface Props {}

const NavComponent: React.FC<Props> = ({ children }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const history = useHistory();

    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const handleToggleActiveMenu = () => {
        setIsActiveMenu(!isActiveMenu);
    };

    const handleClickLink = (event, path) => {
        if (divRef.current) {
            divRef.current.style.left = event.target.offsetLeft + "px";
            divRef.current.style.width = event.target.offsetWidth + "px";
        }

        history.push(path);
    };

    return (
        <WrapperNav>
            <NavWeb>
                <div className="marker" ref={divRef}></div>
                <a onClick={(event) => handleClickLink(event, "/")}>Home</a>
                <a onClick={(event) => handleClickLink(event, "/celulas")}>Células</a>
                <a onClick={(event) => handleClickLink(event, "/ministerios")}>Ministérios</a>
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
                            <a onClick={(event) => handleClickLink(event, "/")}>Home</a>
                            <a onClick={(event) => handleClickLink(event, "/celulas")}>Células</a>
                            <a onClick={(event) => handleClickLink(event, "/ministerios")}>Ministérios</a>
                        </section>
                    </div>
                )}
            </NavMobile>
        </WrapperNav>
    );
};

export default NavComponent;
