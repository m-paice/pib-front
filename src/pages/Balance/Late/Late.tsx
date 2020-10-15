import React from "react";

interface Props {
    delayValue: number;
}

const Late: React.FC<Props> = ({ delayValue }) => {
    return (
        <div className="col-md-3 text-center">
            <div className="font-25">
                <b>Valores em atraso</b>
            </div>
            <div className="txt-red">{delayValue}</div>
        </div>
    );
};

export default Late;
