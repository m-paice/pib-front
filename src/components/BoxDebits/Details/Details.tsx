import React from "react";

import DetailsItem from "./DetailsItem";

const Detaisl: React.FC = () => {
    return (
        <div className="p-3">
            <div className="row nopadding ltab">
                <div className="col-md-2 font-weight-bold lth">Parcela</div>
                <div className="col-md-2 font-weight-bold lth">Vencimento</div>
                <div className="col-md-2 font-weight-bold lth">Valor da Parcela</div>
                <div className="col-md-2 font-weight-bold lth" style={{ whiteSpace: "nowrap" }}>
                    Data de Pagamento
                </div>
                <div className="col-md-2 font-weight-bold lth sit">Situação</div>
                <div className="col-md-2 font-weight-bold lth"></div>
            </div>
            <DetailsItem situation="paga" />
            <DetailsItem situation="ematraso" />
            <DetailsItem situation="proxima" />
        </div>
    );
};

export default Detaisl;
