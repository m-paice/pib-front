import React from "react";

import Fotoperfil from "../../assets/imagens/fotoperfil.png";

interface Props {}

const Tips: React.FC<Props> = (props) => {
    return (
        <div className="page">
            <div className="container">
                <article id="post-52" className="linha1 d-flex">
                    <div className="col-xs-12 col-sm-4 ble">
                        <a href="" title="Equipe">
                            <img width="400" height="400" src={Fotoperfil} />
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-8 bri">
                        <div className="entry-header">
                            <h2 className="entry-title">
                                <a href="" rel="bookmark">
                                    Dica teste de dica
                                </a>
                            </h2>
                        </div>
                        <div className="entry-content">
                            <p>
                                Caros amigos, a constante divulgação das informações promove a alavancagem do sistema de
                                formação de quadros que corresponde às necessidades. Gostaria de enfatizar que o
                                desenvolvimento contínuo de distintas formas de atuação não pode mais…
                            </p>
                        </div>
                    </div>
                </article>

                <article id="post-52" className="linha0 d-flex">
                    <div className="col-xs-12 col-sm-8 bri">
                        <div className="entry-header">
                            <h2 className="entry-title">
                                <a href="" rel="bookmark">
                                    Dica teste de dica
                                </a>
                            </h2>
                        </div>
                        <div className="entry-content">
                            <p>
                                Caros amigos, a constante divulgação das informações promove a alavancagem do sistema de
                                formação de quadros que corresponde às necessidades. Gostaria de enfatizar que o
                                desenvolvimento contínuo de distintas formas de atuação não pode mais…
                            </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-4 ble">
                        <a href="" title="Equipe">
                            <img width="400" height="400" src={Fotoperfil} />
                        </a>
                    </div>
                </article>

                <article id="post-52" className="linha1 d-flex">
                    <div className="col-xs-12 col-sm-4 ble">
                        <a href="" title="Equipe">
                            <img width="400" height="400" src={Fotoperfil} />
                        </a>
                    </div>
                    <div className="col-xs-12 col-sm-8 bri">
                        <div className="entry-header">
                            <h2 className="entry-title">
                                <a href="" rel="bookmark">
                                    Dica teste de dica
                                </a>
                            </h2>
                        </div>
                        <div className="entry-content">
                            <p>
                                Caros amigos, a constante divulgação das informações promove a alavancagem do sistema de
                                formação de quadros que corresponde às necessidades. Gostaria de enfatizar que o
                                desenvolvimento contínuo de distintas formas de atuação não pode mais…
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Tips;
