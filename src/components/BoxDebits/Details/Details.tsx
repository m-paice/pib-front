import React from "react";

import { Details } from "../../../store/modules/pf/debt/types";

import DetailsItem from "./DetailsItem";

import formatPrice from "../../../utils/formatPrice";

interface Props {
    detailsPortion: Details[];
    payment: number;
}

const Detaisl: React.FC<Props> = (props) => {
    const { detailsPortion, payment } = props;

    const handleViewPayment = (payment: number) => {
        if (payment === 1) return "Cartão de crédito";
        if (payment === 2) return "Boleto";

        return "";
    };

    return (
        <div className="p-3">
            <div className="row pagt align-center text-white">
                <div className="col-md text-nowrap txt-lista-regras">
                    Forma de Pagamento
                    <div className="lab lab2">
                        <strong>{handleViewPayment(payment || 0)}</strong>
                    </div>
                </div>
                <div className="col-md text-nowrap txt-lista-regras">
                    Parcelamento
                    <div className="lab lab2">
                        <strong>
                            {DetailsItem.length} de {formatPrice(500 / detailsPortion.length)}
                        </strong>
                    </div>
                </div>
                <div className="col-md text-nowrap txt-lista-regras">
                    Data de Vencimento
                    <div className="lab lab2">
                        <strong>data</strong>
                    </div>
                </div>
                <div className="col-md text-nowrap txt-lista-regras">
                    Valor da Dívida
                    <div className="lab lab2">
                        <strong>{formatPrice(1512)}</strong>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row justify-content-between">
                        <div className=" text-nowrap txt-lista-regras">
                            Desconto
                            <div className="lab lab2">
                                <strong>{formatPrice(22)}</strong>
                            </div>
                        </div>
                        <div className=" text-nowrap txt-lista-regras">
                            Total
                            <div className="lab lab2">
                                <strong>{formatPrice(555)}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
