import React from "react";

import { Negociation } from "../../../store/modules/pj/debtor/types";

// utils
import formatDate from "../../../utils/formatDate";

type Props = Negociation;

const DetailsItem: React.FC<Props> = (props) => {
    const { formaPagamento, parcelamento, negociado, divida, desconto, parcelas } = props;

    const handleViewPayment = (payment: string) => {
        if (payment === "cartao") return "Cartão de crédito";
        if (payment === "boleto") return "Boleto";

        return "";
    };

    const handleViewSituation = (situation: string) => {
        if (situation === "proxima") return "PRÓXIMA";
        if (situation === "atrasado") return "EM ATRASO";
        if (situation === "pago") return "PAGA";
        if (situation === "aguardando") return "AGUARDANDNO PAGAMENTO";

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
                        <strong>{handleViewPayment(formaPagamento || "")}</strong>
                    </div>
                </div>
                <div className="col-md text-nowrap txt-lista-regras">
                    Parcelamento
                    <div className="lab lab2">
                        <strong>
                            {parcelamento} de {handleFormatPrice(negociado / parcelamento)}
                        </strong>
                    </div>
                </div>
                {/* <div className="col-md text-nowrap txt-lista-regras">
                    Data de Vencimento
                    <div className="lab lab2">
                        <strong style={{ color: "red" }}>data</strong>
                    </div>
                </div> */}
                <div className="col-md text-nowrap txt-lista-regras">
                    Valor da Dívida
                    <div className="lab lab2">
                        <strong>{handleFormatPrice(divida)}</strong>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row justify-content-between">
                        <div className=" text-nowrap txt-lista-regras">
                            Desconto
                            <div className="lab lab2">
                                <strong>{handleFormatPrice(desconto)}</strong>
                            </div>
                        </div>
                        <div className=" text-nowrap txt-lista-regras">
                            Total
                            <div className="lab lab2">
                                <strong>{handleFormatPrice(negociado)}</strong>
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
                    {parcelas
                        .sort((a, b) => (a.parcela > b.parcela ? 1 : -1))
                        .map((value, index) => {
                            return (
                                <tr key={index}>
                                    <td className="txt-lista-regras" style={{ border: "none" }}>
                                        {value.parcela}
                                    </td>
                                    <td className="txt-lista-regras" style={{ border: "none" }}>
                                        {formatDate(new Date(value.vencimento))}
                                    </td>
                                    <td className="txt-lista-regras" style={{ border: "none" }}>
                                        {handleFormatPrice(value.valorParcela)}
                                    </td>
                                    <td className="txt-lista-regras" style={{ border: "none" }}>
                                        {value.dataPagamento && formatDate(new Date(value.dataPagamento))}
                                    </td>
                                    <td className="txt-lista-regras" style={{ border: "none" }}>
                                        {handleViewSituation(value.situacao)}
                                    </td>
                                    {/* <td className="txt-lista-regras" style={{ border: "none", width: 150 }}>
                                        {formaPagamento === "boleto" && nextPayment === value.id && (
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
