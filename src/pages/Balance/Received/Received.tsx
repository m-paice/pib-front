import React from "react";

interface Props {
    receiveValue: number;
}

const Received: React.FC<Props> = ({ receiveValue }) => {
    return (
        <div className="col-md-3 text-center">
            <div className="font-25">
                <b>Valores a receber</b>
            </div>
            <div className="txt-saque">Próximos 30 dias</div>
            <div className="txt-green">{receiveValue}</div>
        </div>
    );
};

export default Received;
