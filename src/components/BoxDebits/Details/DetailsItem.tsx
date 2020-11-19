import React from "react";

import { Details } from "../../../store/modules/pf/debt/types";

import formatDate from "../../../utils/formatDate";
import formatPrice from "../../../utils/formatPrice";

interface Props extends Details {
    payment: number;
}

interface Situation {
    label: string;
    class: string;
}

const DetailsItem: React.FC<Props> = (props) => {
    const { portion, situation, dueDate, valuePortion, datePayment, next, payment } = props;

    const handleSituation = (): Situation => {
        const renderSituation = {
            0: {
                label: "Próxima",
                class: "proxima",
            },
            1: {
                label: "Em atraso",
                class: "ematraso",
            },
            2: {
                label: "Paga",
                class: "paga",
            },
        };

        return renderSituation[situation];
    };

    return (
        <div className="row nopadding mt-3">
            <div className="col-md-2">{portion}</div>
            <div className="col-md-2">{formatDate(dueDate)}</div>
            <div className="col-md-2">{formatPrice(valuePortion)}</div>
            <div className="col-md-2">{datePayment && formatDate(datePayment)}</div>
            <div className="col-md-2">
                <span className={handleSituation().class}> {handleSituation().label} </span>
            </div>

            {payment === 2 && next !== 0 && (
                <div className="col-md-2">
                    <a className="proxima txt-10-mob">Gerar Boleto</a>
                </div>
            )}
        </div>
    );
};

export default DetailsItem;
