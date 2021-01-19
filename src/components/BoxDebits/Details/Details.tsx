import React, { useState, useEffect } from "react";

import { Details, Negociation } from "../../../store/modules/pf/debt/types";

import DetailsItem from "./DetailsItem";

import formatPrice from "../../../utils/formatPrice";
import formatDate from "../../../utils/formatDate";

type Props = Negociation;

const Detaisl: React.FC<Props> = (props) => {
    const negociacao = props;
    const { parcelas, formaPagamento } = negociacao;

    const [nextPayment, setNextPayment] = useState("");

    useEffect(() => {
        const portionFound = parcelas
            .sort((a, b) => (a.parcela > b.parcela ? 1 : -1))
            .find((item) => !item.dataPagamento && item.situacao === "proxima");

        // mostrar o botao e gerar boleto
        formaPagamento === "boleto" && setNextPayment(portionFound?.id || "");
    }, []);

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
                        <strong>{negociacao.formaPagamento}</strong>
                    </div>
                </div>
                <div className="col-md text-nowrap txt-lista-regras">
                    Parcelamento
                    <div className="lab lab2">
                        <strong>
                            {negociacao.parcelamento} de {formatPrice(negociacao.negociado / negociacao.parcelamento)}
                        </strong>
                    </div>
                </div>
                {/* <div className="col-md text-nowrap txt-lista-regras">
                    Data de Vencimento
                    <div className="lab lab2">
                        <strong>{formatDate(new Date(negociacao.dataRegistro))}</strong>
                    </div>
                </div> */}
                <div className="col-md text-nowrap txt-lista-regras">
                    Valor da Dívida
                    <div className="lab lab2">
                        <strong>{formatPrice(negociacao.divida)}</strong>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row justify-content-between">
                        <div className=" text-nowrap txt-lista-regras">
                            Desconto
                            <div className="lab lab2">
                                <strong>{formatPrice(negociacao.desconto)}</strong>
                            </div>
                        </div>
                        <div className=" text-nowrap txt-lista-regras">
                            Total
                            <div className="lab lab2">
                                <strong>{formatPrice(negociacao.divida - negociacao.desconto)}</strong>
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

            {parcelas
                .sort((a, b) => (a.parcela > b.parcela ? 1 : -1))
                .map((item, index) => {
                    return <DetailsItem key={index} nextPayment={nextPayment} {...item} />;
                })}
        </div>
    );
};

export default Detaisl;
