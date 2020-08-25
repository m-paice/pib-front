import React from "react";

// assets
import Bandeiras from "../../../assets/imagens/bandeiras.png";
import Ccv from "../../../assets/imagens/ccv.png";

const Card: React.FC = () => {
    return (
        <div className="col-xs-12 col-sm-6 pagb3 ccor">
            Preencha com os dados do seu cartão
            <img src={Bandeiras} className="bandeiras" />
            <div className="col-xs-12 nopadding">
                <label>
                    <input placeholder="Número do cartão" />
                </label>
            </div>
            <div className="col-xs-12 nopadding">
                <label>
                    <input placeholder="Validade mês" />
                </label>
            </div>
            <div className="col-xs-12 nopadding">
                <label>
                    <input placeholder="Validade ano" />
                </label>
            </div>
            <div className="col-xs-12 nopadding">
                <label>
                    <input placeholder="Nome impresso no cartão" />
                </label>
            </div>
            <div className="col-xs-12 col-md-6 nopadding">
                <label className="ccv">
                    <img src={Ccv} />
                    <input placeholder="CCV" />
                </label>
            </div>
            <div className="col-xs-12 col-md-6 nopadright">
                <a className="cacordo" href="javascript:void(0);">
                    Finalizar
                </a>
            </div>
            <div className="col-xs-12 erro nopadding">
                *Por favor, revise a quantidade de parcelas do seu acordo seguindo o número máximo de prestações
                definidas pelo emissor de seu cartão de crédito
            </div>
        </div>
    );
};

export default Card;
