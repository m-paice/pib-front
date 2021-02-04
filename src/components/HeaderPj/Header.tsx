import React from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { userAuthenticated } from "../../store/modules/auth/selectors";

// assets
import Logo from "../../assets/credas-icon.png";
import I1 from "../../assets/imagens/i1.png";
import I21 from "../../assets/imagens/i21.png";

import I2 from "../../assets/imagens/i2.png";
import I22 from "../../assets/imagens/i22.png";

import RulerAndPencil from "../../assets/imagens/iRulerAndPencil.png";
import RulerAndPencilBlue from "../../assets/imagens/iRulerAndPencilBlue.png";

import User from "../../assets/imagens/iUser.png";
import UserBlue from "../../assets/imagens/iUser2.png";

const Header: React.FC = () => {
    const user = useSelector(userAuthenticated);

    return (
        <header id="masthead" className="site-header limita" role="banner" data-parallax="scroll">
            <div className="site-header-wrap">
                <div className="site-branding">
                    <div className="row container">
                        <div className="col-xs-12 col-sm-2">
                            <div
                                className="site-logo"
                                style={{
                                    width: 250,
                                    marginTop: 15,
                                }}
                            >
                                <img src={Logo} />
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-10 bxmenu">
                            <div className="buser">
                                Olá {user.nome}
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
                                        <Link to="/balance">
                                            <img className="i1" src={I1} />
                                            <img className="i2" src={I21} />
                                            Resumo
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/financialReport">
                                            <img className="i1" src={I2} />
                                            <img className="i2" src={I22} />
                                            Extrato
                                        </Link>
                                    </li>
                                    <li>
                                        <Link style={{ lineHeight: "18px" }} to="/ruleNegociation">
                                            <img className="i1" src={RulerAndPencil} />
                                            <img className="i2" src={RulerAndPencilBlue} />
                                            Regras de negociação
                                        </Link>
                                    </li>
                                    <li>
                                        <Link style={{ lineHeight: "18px" }} to="/debitorBase">
                                            <img className="i1" src={User} />
                                            <img className="i2" src={UserBlue} />
                                            Carteira de devedores
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
