import React, { useState, CSSProperties } from "react";

import { useSelector, useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { userAuthenticated } from "../../store/modules/auth/selectors";

import { actions as actionAuth } from "../../store/modules/auth/actions";

// assets
import Logo from "../../assets/credas-icon.png";
import I1 from "../../assets/imagens/i1.png";
import I21 from "../../assets/imagens/i21.png";

import I2 from "../../assets/imagens/i2.png";
import I22 from "../../assets/imagens/i22.png";

import I3 from "../../assets/imagens/i3.png";
import I23 from "../../assets/imagens/i23.png";

import I4 from "../../assets/imagens/i4.png";
import I24 from "../../assets/imagens/i24.png";

const stylesContent: CSSProperties = {
    position: "fixed",
    backgroundColor: "#484848",
    padding: "15px",
    width: "250px",
    height: "100vh",
    top: "1px",
    right: 0,
    zIndex: 1,
    color: "#fff",
    overflowY: "auto",
};

const stylesButton: CSSProperties = {
    border: "1px solid #fff",
    borderRadius: "20px",
    padding: "1px 7px",
};

const stylesItem: CSSProperties = {
    height: 70,
    listStyle: "none",
    display: "flex",
    alignItems: "center",
};

const stylesItemText: CSSProperties = {
    fontSize: 18,
};

const stylesItemFooter: CSSProperties = {
    height: 40,
    listStyle: "none",
    fontSize: 18,

    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
};

const Header: React.FC = () => {
    const dispacth = useDispatch();

    const [openMenu, setOpenMenu] = useState(false);

    const history = useHistory();

    const handleToggleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    const handleChangePath = (path) => {
        history.push(path);
        setOpenMenu(false);
    };

    const handleExitPlatform = () => {
        history.push("/");
        dispacth(actionAuth.logout());
    };

    const user = useSelector(userAuthenticated);

    return (
        <>
            <div className="web">
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
                                        <Link to="/" onClick={() => dispacth(actionAuth.logout())}>
                                            Sair
                                        </Link>
                                    </div>

                                    {/* <a href="" className="showmenu">
                                        Menu <span className="glyphicon glyphicon-menu-hamburger"></span>
                                    </a> */}

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
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <div className="mobile">
                <header className="site-header site-branding">
                    <div className="pt-2 pb-2 pl-4 pr-4 d-flex align-items-center justify-content-between">
                        <img src={Logo} width="110px" height="60px" />
                        <a href="#" className="showmenu" onClick={handleToggleOpenMenu}>
                            Menu <span className="glyphicon glyphicon-menu-hamburger"></span>
                        </a>
                    </div>
                </header>

                {openMenu && (
                    <div style={stylesContent}>
                        <span onClick={handleToggleOpenMenu}> FECHAR </span>
                        <header
                            style={{ height: 70 }}
                            className="d-flex flex-column align-items-end justify-content-center"
                        >
                            <span style={{ textAlign: "end" }}>
                                {" "}
                                Olá <b>{user.nome}</b>{" "}
                            </span>
                            <div className="mt-2">
                                <span style={stylesButton} onClick={() => handleChangePath("/profile")}>
                                    {" "}
                                    SEU CADASTRO{" "}
                                </span>
                                <span style={stylesButton} className="ml-2" onClick={handleExitPlatform}>
                                    {" "}
                                    SAIR{" "}
                                </span>
                            </div>
                        </header>
                        <section>
                            <ul className="m-0 p-0 d-flex flex-column align-items-end justify-content-between">
                                <li onClick={() => handleChangePath("/pf")} style={stylesItem} className="d-flex">
                                    <span style={stylesItemText}>Seu Painel</span>{" "}
                                    <span className="ml-2">
                                        <img className="i1" src={I1} width="44px" height="54px" />
                                    </span>
                                </li>
                                <li onClick={() => handleChangePath("/offers")} style={stylesItem} className="d-flex">
                                    <span style={stylesItemText}>Nossas Ofertas</span>{" "}
                                    <span className="ml-2">
                                        <img className="i1" src={I2} width="44px" height="54px" />
                                    </span>
                                </li>
                                <li onClick={() => handleChangePath("/tips")} style={stylesItem} className="d-flex">
                                    <span style={stylesItemText}>Nossas Dicas</span>{" "}
                                    <span className="ml-2">
                                        {" "}
                                        <img className="i1" src={I3} width="44px" height="54px" />
                                    </span>
                                </li>
                                <li onClick={() => handleChangePath("/help")} style={stylesItem} className="d-flex">
                                    <span style={stylesItemText}>Suas Dúvidas</span>{" "}
                                    <span className="ml-2">
                                        <img className="i1" src={I4} width="44px" height="54px" />
                                    </span>
                                </li>
                            </ul>
                        </section>

                        <div className="div menucel">
                            <span className="detdiv"></span>
                        </div>

                        <footer className="pt-3">
                            <ul className="m-0">
                                <li style={stylesItemFooter}> QUEM SOMOS </li>
                                <li style={stylesItemFooter}> COMO FUNCIONA </li>
                                <li style={stylesItemFooter}> SERVIÇOS </li>
                                <li style={stylesItemFooter}> PARCEIROS </li>
                                <li style={stylesItemFooter}> DÚVIDAS </li>
                            </ul>
                        </footer>
                    </div>
                )}
            </div>
        </>
    );
};

export default Header;
