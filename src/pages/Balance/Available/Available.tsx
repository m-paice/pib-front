import React, { useState } from "react";

import AletrWithdraw from "../../../components/AlertWithdraw";

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

            <div className="container">
                {transfer && (
                    <AletrWithdraw
                        isValidValue={isValidValue}
                        handleConfirm={handleSetTransfer}
                        handleCancel={handleSetTransfer}
                    />
                )}
            </div>
        </div>
    );
};

export default Available;
