import React from "react";

import DetailsItem from "./DetailsItem";

const Detaisl: React.FC = () => {
    return (
        <div className="hidden-xs ">
            <div className="col-xs-12 nopadding ltab">
                <div className="col-xs-2 col-sm-2 lth">Parcela</div>
                <div className="col-xs-3 col-sm-2 lth">Vencimento</div>
                <div className="col-xs-4 col-sm-2 lth">Valor da Parcela</div>
                <div className="col-xs-3 col-sm-2 lth">Data de Pagamento</div>
                <div className="col-xs-0 col-sm-2 lth sit">Situação</div>
                <div className="col-xs-0 col-sm-2 lth"></div>
            </div>
            <DetailsItem situation="paga" />
            <DetailsItem situation="ematraso" />
            <DetailsItem situation="proxima" />
        </div>
    );
};

export default Detaisl;
