import React from "react";

interface Props {}

const Available: React.FC<Props> = (props) => {
    return (
        <div className="col-md-4 text-center">
            <div className="font-25">
                <b>Saldo disponível</b>
                <div>
                    <b>para saque </b>
                </div>
            </div>
            <div className="txt-green">R$ 300,00</div>
            <button id="btn-lista-regras" className="btn-azul sacar">
                SACAR
            </button>
        </div>
    );
};

export default Available;
