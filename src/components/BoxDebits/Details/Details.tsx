import React from "react";

import { Details } from "../../../store/modules/pf/debt/types";

import DetailsItem from "./DetailsItem";

interface Props {
    detailsPortion: Details[];
    payment: number;
}

const Detaisl: React.FC<Props> = (props) => {
    const { detailsPortion, payment } = props;

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

            {detailsPortion
                .sort((a, b) => (a.dueDate > b.dueDate ? 1 : -1))
                .map((item, index) => {
                    if (item.situation === 0) return <DetailsItem key={index} payment={payment} {...item} />;

                    if (item.situation === 1) return <DetailsItem key={index} payment={payment} {...item} />;

                    return <DetailsItem key={index} payment={payment} {...item} />;
                })}
        </div>
    );
};

export default Detaisl;
