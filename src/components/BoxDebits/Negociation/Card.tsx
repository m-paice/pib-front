import React, { useState } from "react";

// assets
import Bandeiras from "../../../assets/imagens/bandeiras.png";

interface Props {
    disabled: boolean;
    handleConfirm(data): void;
}

const Card: React.FC<Props> = (props) => {
    const { disabled, handleConfirm } = props;

    const [values, setValues] = useState({
        numeroCartao: "",
        mesCartao: "",
        anoCartao: "",
        nomeCartao: "",
        codigoCartao: "",
    });

    const handleSetValues = (key: string, value: string) => {
        setValues((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleConfirmWakeUp = () => {
        const elements = Object.values(values).some((item) => !item);

        if (elements) return;

        handleConfirm(values);
    };

    return (
        <div>
            <div className="font-weight-bold">Preencha com os dados do seu cartão</div>
            <img src={Bandeiras} className="bandeiras" />

            <div className="row ml-0 mr-0">
                <label>
                    <input
                        onChange={(event) => handleSetValues("numeroCartao", event.target.value)}
                        className="imp"
                        disabled={disabled}
                        placeholder="Número do cartão"
                    />
                </label>
            </div>
            <div className="row ml-0 mr-0">
                <label>
                    <input
                        onChange={(event) => handleSetValues("mesCartao", event.target.value)}
                        className="imp"
                        disabled={disabled}
                        placeholder="Validade mês"
                    />
                </label>
            </div>
            <div className="row ml-0 mr-0">
                <label>
                    <input
                        onChange={(event) => handleSetValues("anoCartao", event.target.value)}
                        className="imp"
                        disabled={disabled}
                        placeholder="Validade ano"
                    />
                </label>
            </div>
            <div className="row ml-0 mr-0">
                <label>
                    <input
                        onChange={(event) => handleSetValues("nomeCartao", event.target.value)}
                        className="imp"
                        disabled={disabled}
                        placeholder="Nome impresso no cartão"
                    />
                </label>
            </div>

            <div className="row ml-0 mr-0">
                <div className="col-md-6 nopadding padding-10">
                    <label className="ccv">
                        <input
                            onChange={(event) => handleSetValues("codigoCartao", event.target.value)}
                            className="imp"
                            disabled={disabled}
                            placeholder="CVV"
                        />
                    </label>
                </div>
                <div className="col-md-6 nopadding padding-10">
                    <button
                        style={{ border: "none" }}
                        disabled={disabled}
                        onClick={handleConfirmWakeUp}
                        className="cacordo font-weight-bold"
                    >
                        Confirmar acordo
                    </button>
                </div>
            </div>

            {/* <div className="error">
                *Por favor, revise a quantidade de parcelas do seu acordo seguindo o número máximo de prestações
                definidas pelo emissor de seu cartão de crédito
            </div> */}
        </div>
    );
};

export default Card;
