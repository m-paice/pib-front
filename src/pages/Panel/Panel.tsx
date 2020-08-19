import React from "react";

// components
import Carousel from "../../components/Carousel";
import BoxKnowMore from "../../components/BoxKnowMore";

import Fotoperfil from "../../assets/imagens/fotoperfil.png";
import Carafeliz from "../../assets/imagens/carafeliz.png";

const Panel: React.FC = () => {
    return (
        <div className="page">
            <div className="row container">
                <div className="col-xs-12 col-sm-3 col-sm-offset-1">
                    <img className="pessoa" src={Fotoperfil} />
                    <img className="cara" src={Carafeliz} />
                </div>

                <div className="col-xs-12 col-sm-8 titulos">
                    <h2>Parabéns,</h2>
                    <h3>não encontramos dívidas em seu nome.</h3>
                    <a href="painel-debitos.html">Ver painel com débitos</a>
                </div>
            </div>

            <Carousel />

            <div className="faixa2">
                <div className="row container">
                    <div className="col-xs-12 col-sm-6">
                        <BoxKnowMore
                            title="Empréstimo Pessoal"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco."
                        />
                    </div>

                    <div className="col-xs-12 col-sm-6">
                        <BoxKnowMore
                            title="Empréstimo Pessoal"
                            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Panel;
