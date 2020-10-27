import React from "react";

import { Link } from "react-router-dom";

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
                            <div className="buser">
                                Olá Fulano
                                <Link to="/profile">Seu Cadastro</Link>
                                <Link to="/">Sair</Link>
                            </div>

                            <a href="" className="showmenu">
                                Menu <span className="glyphicon glyphicon-menu-hamburger"></span>
                            </a>

                            <nav id="site-navigation" className="main-navigation" role="navigation">
                                <ul>
                                    <li className="menucel">Olá Fulano</li>
                                    <li className="menucel">
                                        <Link to="/"> Sair </Link>
                                        <Link to="/register">Seu Cadastro</Link>
                                    </li>

                                    <li className="div menucel"></li>

                                    <li>
                                        <Link to="/pf">
                                            <img className="i1" src={I1} />
                                            <img className="i2" src={I21} /> Seu Painel
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/offers">
                                            <img className="i1" src={I2} />
                                            <img className="i2" src={I22} />
                                            Nossas Ofertas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/tips">
                                            <img className="i1" src={I3} />
                                            <img className="i2" src={I23} />
                                            Nossas Dicas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/help">
                                            <img className="i1" src={I4} />
                                            <img className="i2" src={I24} />
                                            Suas Dúvidas
                                        </Link>
                                    </li>

                                    <li className="div menucel">
                                        <span className="detdiv"></span>
                                    </li>
                                    <li className="menucel">
                                        <a href="">Quem Somos</a>
                                    </li>
                                    <li className="menucel">
                                        <a href="">Como Funciona</a>
                                    </li>
                                    <li className="menucel">
                                        <a href="">Serviços</a>
                                    </li>
                                    <li className="menucel">
                                        <a href="">Parceiros</a>
                                    </li>
                                    <li className="menucel">
                                        <a href="">Dúvidas</a>
                                    </li>
                                    <li className="menucel">
                                        <a href="">Suas Dúvidas</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
