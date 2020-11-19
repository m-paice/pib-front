import React from "react";

// assets
import Bandeiras from "../../../assets/imagens/bandeiras.png";
import Ccv from "../../../assets/imagens/ccv.png";

interface Props {
    confirm: boolean;
}

const Card: React.FC<Props> = (props) => {
    const { confirm } = props;

    return (
        <div>
            <div className="font-weight-bold">Preencha com os dados do seu cartão</div>
            <img src={Bandeiras} className="bandeiras" />

            <div className="row ml-0 mr-0">
                <label>
                    <input className="imp" disabled={confirm} placeholder="Número do cartão" />
                </label>
            </div>
            <div className="row ml-0 mr-0">
                <label>
                    <input className="imp" disabled={confirm} placeholder="Validade mês" />
                </label>
            </div>
            <div className="row ml-0 mr-0">
                <label>
                    <input className="imp" disabled={confirm} placeholder="Validade ano" />
                </label>
            </div>
            <div className="row ml-0 mr-0">
                <label>
                    <input className="imp" disabled={confirm} placeholder="Nome impresso no cartão" />
                </label>
            </div>

            <div className="row ml-0 mr-0">
                <div className="col-md-6 nopadding padding-10">
                    <label className="ccv">
                        {/* <img src={Ccv} /> */}
                        <input className="imp" disabled={confirm} placeholder="CCV" />
                    </label>
                </div>
                <div className="col-md-6 nopadding padding-10">
                    <button style={{ border: "none" }} disabled={confirm} className="cacordo font-weight-bold">
                        Finalizar
                    </button>
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
