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
    const { value, negociacao } = props;

    const handleViewPayment = (payment: string) => {
        if (payment === "cartao") return "Cartão de crédito";
        if (payment === "boleto") return "Boleto";

        return "";
    };

    const handleViewSituation = (situation: string) => {
        if (situation === "proxima") return "PRÓXIMA";
        if (situation === "atrasado") return "EM ATRASO";
        if (situation === "pago") return "PAGA";

        return "";
    };

    const handleFormatPrice = (value: number) =>
        value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });

    return (
        <div className="row pagt align-center">
            <div className="row pagt align-center">
                <div className="col-md text-nowrap txt-lista-regras">
                    Forma de Pagamento
                    <div className="lab lab2">
                        <strong>{handleViewPayment(negociacao?.formaPagamento || "")}</strong>
                    </div>
                </div>
                <div className="col-md text-nowrap txt-lista-regras">
                    Parcelamento
                    <div className="lab lab2">
                        <strong>
                            {negociacao?.parcelamento} de{" "}
                            {negociacao && handleFormatPrice(negociacao?.negociado / negociacao?.parcelamento)}
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
                                <strong>{negociacao && handleFormatPrice(negociacao?.desconto)}</strong>
                            </div>
                        </div>
                        <div className=" text-nowrap txt-lista-regras">
                            Total
                            <div className="lab lab2">
                                <strong>{negociacao && handleFormatPrice(negociacao?.divida)}</strong>
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
                    {negociacao?.parcelas.map((value, index) => {
                        return (
                            <tr key={index}>
                                <td className="txt-lista-regras" style={{ border: "none" }}>
                                    {index + 1}
                                </td>
                                <td className="txt-lista-regras" style={{ border: "none" }}>
                                    {formatDate(value.vencimento)}
                                </td>
                                <td className="txt-lista-regras" style={{ border: "none" }}>
                                    {handleFormatPrice(value.valorParcela)}
                                </td>
                                <td className="txt-lista-regras" style={{ border: "none" }}>
                                    {value.dataPagamento && formatDate(value.dataPagamento)}
                                </td>
                                <td className="txt-lista-regras" style={{ border: "none" }}>
                                    {handleViewSituation(value.situacao)}
                                </td>
                                {/* <td className="txt-lista-regras" style={{ border: "none", width: 150 }}>
                                    {situation === 1 && payment === 2 && index === 0 && <span> Gerar boleto </span>}

                                    {situation !== 1 && payment === 2 && value.next === 1 && (
                                        <span> Gerar boleto </span>
                                    )}
                                </td> */}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default DetailsItem;
