import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { userAuthenticated } from "../../store/modules/auth/selectors";

import { actions as actionAuth } from "../../store/modules/auth/actions";

// assets
import Logo from "../../assets/imagens/logo.png";
import I1 from "../../assets/imagens/i1.png";
import I21 from "../../assets/imagens/i21.png";

import I2 from "../../assets/imagens/i2.png";
import I22 from "../../assets/imagens/i22.png";

import I3 from "../../assets/imagens/i3.png";
import I23 from "../../assets/imagens/i23.png";

import I4 from "../../assets/imagens/i4.png";
import I24 from "../../assets/imagens/i24.png";

const Header: React.FC = () => {
    const dispacth = useDispatch();

    const user = useSelector(userAuthenticated);

    return (
        <header id="masthead" className="site-header limita" role="banner" data-parallax="scroll">
            <div className="site-header-wrap">
                <div className="site-branding">
                    <div className="row container">
                        <div className="col-xs-12 col-sm-2">
                            <div className="site-logo">
                                <img src={Logo} />
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-10 bxmenu">
                            <nav id="site-navigation" className="main-navigation" role="navigation">
                                <ul>
                                    <li>CONSUMIDORES</li>
                                    <li>QUEM SOMOS</li>
                                    <li>CADASTRE-SE</li>
                                </ul>
                                <div className="buser">
                                    <Link to="/">Entrar</Link>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
