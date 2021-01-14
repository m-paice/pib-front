import React from "react";

import { Parcelas } from "../../../store/modules/pf/debt/types";

import formatDate from "../../../utils/formatDate";
import formatPrice from "../../../utils/formatPrice";

interface Props extends Parcelas {
    formaPagamento: string;
}

interface Situation {
    label: string;
    class: string;
}

const DetailsItem: React.FC<Props> = (props) => {
    const { parcela, situacao, vencimento, valorParcela, dataPagamento, formaPagamento } = props;

    const handleSituation = (): Situation => {
        const renderSituation = {
            proxima: {
                label: "Próxima",
                class: "proxima",
            },
            atraso: {
                label: "Em atraso",
                class: "ematraso",
            },
            paga: {
                label: "Paga",
                class: "paga",
            },
        };

        return renderSituation[situacao];
    };

    return (
        <div className="row nopadding mt-3">
            <div className="col-md-2">{parcela}</div>
            <div className="col-md-2">{formatDate(new Date(vencimento))}</div>
            <div className="col-md-2">{formatPrice(valorParcela)}</div>
            <div className="col-md-2">{dataPagamento && formatDate(new Date(dataPagamento))}</div>
            <div className="col-md-2">
                <span className={handleSituation().class}> {handleSituation().label} </span>
            </div>

            {/* {payment === 2 && next !== 0 && (
                <div className="col-md-2">
                    <a className="proxima txt-10-mob">Gerar Boleto</a>
                </div>
            )} */}
        </div>
    );
};

export default DetailsItem;
