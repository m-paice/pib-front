import React from "react";

interface Props {}

const Late: React.FC<Props> = (props) => {
    return (
        <div className="col-md-3 text-center">
            <div className="font-25">
                <b>Valores em atraso</b>
            </div>
            <div className="txt-red">R$ 300,00</div>
        </div>
    );
};

export default Late;
