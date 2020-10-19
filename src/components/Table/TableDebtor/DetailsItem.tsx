import React, { useState } from "react";

import { Debtor } from "../../../store/modules/pj/debtor/types";

// utils
import formatDate from "../../../utils/formatDate";

interface Props extends Debtor {
    total: number;
    value: number;
    valuePortion: number;
}

const DetailsItem: React.FC<Props> = (props) => {
    const { situation, payment, portion, valuePortion, value, detailsPortion, discount, total } = props;

    const [nextPaymentId, setNextPaymenId] = useState("");

    const handleViewPayment = (payment: number) => {
        if (payment === 1) return "Cartão de crédito";
        if (payment === 2) return "Boleto";

        return "";
    };

    const handleViewSituation = (situation: number) => {
        if (situation === 0) return "PRÓXIMA";
        if (situation === 1) return "EM ATRASO";
        if (situation === 3) return "PAGA";

        return "";
    };

    const handleFormatPrice = (value: number) =>
        value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });

    const handleSetState = (id: string) => {
        console.log(nextPaymentId);
        if (nextPaymentId.length) return;

        setNextPaymenId(id);
    };

    return (
        <div className="row pagt align-center">
            <div className="row pagt align-center">
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
                            {portion} de {handleFormatPrice(valuePortion)}
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
                        <strong>{handleFormatPrice(value)}</strong>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row justify-content-between">
                        <div className=" text-nowrap txt-lista-regras">
                            Desconto
                            <div className="lab lab2">
                                <strong>{handleFormatPrice(discount)}</strong>
                            </div>
                        </div>
                        <div className=" text-nowrap txt-lista-regras">
                            Total
                            <div className="lab lab2">
                                <strong>{handleFormatPrice(total)}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <table className="mt-2">
                <thead>
                    <tr>
                        <th className="txt-lista-regras">Parcela </th>
                        <th className="txt-lista-regras">Vencimento </th>
                        <th className="txt-lista-regras">Valor da Parcela </th>
                        <th className="txt-lista-regras">Data do Pagamento </th>
                        <th className="txt-lista-regras">Situação </th>
                        <th className="txt-lista-regras"></th>
                    </tr>
                </thead>
                <tbody>
                    {detailsPortion.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td className="txt-lista-regras" style={{ border: "none" }}>
                                    {value.portion}
                                </td>
                                <td className="txt-lista-regras" style={{ border: "none" }}>
                                    {formatDate(value.dueDate)}
                                </td>
                                <td className="txt-lista-regras" style={{ border: "none" }}>
                                    {handleFormatPrice(value.valuePortion)}
                                </td>
                                <td className="txt-lista-regras" style={{ border: "none" }}>
                                    {value.datePayment && formatDate(value.datePayment)}
                                </td>
                                <td className="txt-lista-regras" style={{ border: "none" }}>
                                    {handleViewSituation(value.situation)}
                                </td>
                                <td className="txt-lista-regras" style={{ border: "none", width: 150 }}>
                                    {value.situation === 0 && handleSetState(value.id)}

                                    {situation === 1 && payment === 2 && index === 0 && <span> Gerar boleto </span>}

                                    {situation !== 1 &&
                                        payment === 2 &&
                                        value.situation === 0 &&
                                        value.id === nextPaymentId && <span> Gerar boleto </span>}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DetailsItem;
