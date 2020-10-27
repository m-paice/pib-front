import React from "react";

import { Link } from "react-router-dom";

// components
import Carousel from "../../components/Carousel";
import BoxKnowMore from "../../components/BoxKnowMore";

import Fotoperfil from "../../assets/imagens/fotoperfil.png";
import Carafeliz from "../../assets/imagens/carafeliz.png";

const PanelPj: React.FC = () => {
    return (
        <div className="page">
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

export default PanelPj;
