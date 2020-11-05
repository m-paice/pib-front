import React from "react";

// assets
import Bandeiras from "../../../assets/imagens/bandeiras.png";
import Ccv from "../../../assets/imagens/ccv.png";

const Card: React.FC = () => {
    return (
        <div>
            <div className="font-weight-bold">Preencha com os dados do seu cartão</div>
            <img src={Bandeiras} className="bandeiras" />

            <div className="row ml-0 mr-0">
                <label>
                    <input className="imp" placeholder="Número do cartão" />
                </label>
            </div>
            <div className="row ml-0 mr-0">
                <label>
                    <input className="imp" placeholder="Validade mês" />
                </label>
            </div>
            <div className="row ml-0 mr-0">
                <label>
                    <input className="imp" placeholder="Validade ano" />
                </label>
            </div>
            <div className="row ml-0 mr-0">
                <label>
                    <input className="imp" placeholder="Nome impresso no cartão" />
                </label>
            </div>

            <div className="row ml-0 mr-0">
                <div className="col-md-6 nopadding padding-10">
                    <label className="ccv">
                        {/* <img src={Ccv} /> */}
                        <input className="imp" placeholder="CCV" />
                    </label>
                </div>
                <div className="col-md-6 nopadding padding-10">
                    <a className="cacordo" href="javascript:void(0);">
                        Finalizar
                    </a>
                </div>
            </div>

            <div className="error">
                *Por favor, revise a quantidade de parcelas do seu acordo seguindo o número máximo de prestações
                definidas pelo emissor de seu cartão de crédito
            </div>
        </div>
    );
};

export default Card;
