import React from "react";

interface Props {
    availableValue: number;
}

const Available: React.FC<Props> = ({ availableValue }) => {
    return (
        <div className="col-md-4 text-center">
            <div className="font-25">
                <b>Saldo disponível</b>
                <div>
                    <b>para saque </b>
                </div>
            </div>
            <div className="txt-green">{availableValue}</div>
            <button id="btn-lista-regras" className="btn-azul sacar">
                SACAR
            </button>
        </div>
    );
};

export default Available;
