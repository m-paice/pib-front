import React, { useState } from "react";

import SweetAlert from "react-bootstrap-sweetalert";

interface Props {
    availableValue: number;
    isValidValue: boolean;
}

const Available: React.FC<Props> = ({ availableValue, isValidValue }) => {
    const [transfer, setTransfer] = useState(false);

    const handleSetTransfer = () => {
        setTransfer(!transfer);
    };

    return (
        <div className="col-md-4 text-center">
            <div className="font-25">
                <b>Saldo disponível</b>
                <div>
                    <b>para saque </b>
                </div>
            </div>
            <div className="txt-green">{availableValue}</div>
            <button onClick={handleSetTransfer} id="btn-lista-regras" className="btn-azul sacar">
                SACAR
            </button>

            {transfer && (
                <div>
                    {isValidValue ? (
                        <SweetAlert
                            title={
                                <div className="txt-sweet-alert">
                                    Tem certeza que deseja <br /> sacar este valor agora?
                                </div>
                            }
                            style={{
                                background: "#14647b",
                                color: "#fff !important",
                            }}
                            showCancel
                            confirmBtnCssClass="btn-sweet-alert"
                            cancelBtnCssClass="btn-sweet-alert"
                            confirmBtnText="Quero sacar"
                            cancelBtnText="Cancelar"
                            onConfirm={handleSetTransfer}
                            onCancel={handleSetTransfer}
                        />
                    ) : (
                        <SweetAlert
                            title={
                                <div className="txt-sweet-alert">
                                    Opa! Você não possui valor mínimo <br /> para saque que é de R$25,00
                                </div>
                            }
                            style={{
                                background: "#14647b",
                                color: "#fff !important",
                            }}
                            confirmBtnCssClass="btn-sweet-alert"
                            confirmBtnText="Voltar"
                            onConfirm={handleSetTransfer}
                        />
                    )}
                </div>
            )}
        </div>
    );
};

export default Available;
