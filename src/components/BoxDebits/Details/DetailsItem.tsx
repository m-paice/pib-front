import React from "react";

import { Parcelas } from "../../../store/modules/pf/debt/types";

import formatDate from "../../../utils/formatDate";
import formatPrice from "../../../utils/formatPrice";

interface Props extends Parcelas {
    nextPayment: string;
    generateBillet(data): void;
}
interface Situation {
    label: string;
    class: string;
}

const DetailsItem: React.FC<Props> = (props) => {
    const { id, parcela, situacao, vencimento, valorParcela, dataPagamento, nextPayment, generateBillet } = props;

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
            pago: {
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

            {nextPayment === id && (
                <div className="col-md-2">
                    <a onClick={() => generateBillet(id)} className="proxima txt-10-mob">
                        Gerar Boleto
                    </a>
                </div>
            )}
        </div>
    );
};

export default DetailsItem;
