import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { ApplicationState } from "../../../store";
// types
import { Negociation } from "../../../store/modules/pf/debt/types";
// actions
import { actions as actionsNotifications } from "../../../store/modules/app/notification/actions";
import { actions as actionsDebits } from "../../../store/modules/pf/debt/actions";

// components
import Alert from "../../Alert";
import DetailsItem from "./DetailsItem";

// utils
import formatPrice from "../../../utils/formatPrice";
import formatDate from "../../../utils/formatDate";

interface Props extends Negociation {
    generateBillet(data): void;
    renegotiateDebit(id): void;
}

const Detaisl: React.FC<Props> = (props) => {
    const { generateBillet, renegotiateDebit } = props;
    const negociacao = props;

    const { parcelas, formaPagamento } = negociacao;

    const showNotification = useSelector((state: ApplicationState) => state.app.notification.show);

    const dispatch = useDispatch();

    const [nextPayment, setNextPayment] = useState("");

    useEffect(() => {
        const portionFound = parcelas.some((item) => item.situacao === "aguardando")
            ? null
            : parcelas
                  .sort((a, b) => (a.parcela > b.parcela ? 1 : -1))
                  .find((item) => !item.dataPagamento && item.situacao === "proxima");

        // mostrar o botao e gerar boleto
        formaPagamento === "boleto" && setNextPayment(portionFound?.id || "");
    }, []);

    const handleGenerateBillet = (data) => {
        generateBillet(data);
        setNextPayment("");
    };

    const handleViewPayment = (payment: string) => {
        if (payment === "cartao") return "Cartão de crédito";
        if (payment === "boleto") return "Boleto";

        return "";
    };

    const handleHideNotification = () => {
        dispatch(actionsNotifications.hideNotification());
    };

    const handleHideNotificationAfterLoadDebit = () => {
        dispatch(actionsNotifications.hideNotification());
        dispatch(actionsDebits.loadDebt());
    };

    if (negociacao.situacao === "recusado") {
        return (
            <div className="p-3 d-flex align-items-center justify-content-center">
                <button className="btpadrao" onClick={() => renegotiateDebit(negociacao.id)}>
                    {" "}
                    Negociar novamente{" "}
                </button>

                <Alert
                    show={showNotification}
                    title="Credas informa"
                    message="Muito bem. Agora você pode negociar sua dívida novamente."
                    type="success"
                    handleConfirm={handleHideNotificationAfterLoadDebit}
                />
            </div>
        );
    }

    return (
        <>
            <div className="web p-3">
                <div className="row pagt align-center text-white">
                    <div className="col-md text-nowrap txt-lista-regras">
                        Forma de Pagamento
                        <div className="lab lab2">
                            <strong>{handleViewPayment(negociacao.formaPagamento)}</strong>
                        </div>
                    </div>
                    <div className="col-md text-nowrap txt-lista-regras">
                        Parcelamento
                        <div className="lab lab2">
                            <strong>
                                {negociacao.parcelamento} de{" "}
                                {formatPrice(negociacao.negociado / negociacao.parcelamento)}
                            </strong>
                        </div>
                    </div>

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

                {formaPagamento === "boleto" && (
                    <>
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
                                return (
                                    <DetailsItem
                                        key={index}
                                        generateBillet={handleGenerateBillet}
                                        debitoId={negociacao.debitoId}
                                        nextPayment={nextPayment}
                                        {...item}
                                    />
                                );
                            })}
                    </>
                )}

                <Alert
                    show={showNotification}
                    title="Credas informa"
                    message="Parabéns, você acabou de gerar um boleto. Verifique seu e-mail."
                    type="success"
                    handleConfirm={handleHideNotificationAfterLoadDebit}
                />
            </div>

            <div className="mobile">
                <div className="mt-2 pt-2 pb-2 border-top ">
                    <b>Já negociada em {formatDate(new Date(negociacao.dataRegistro))}</b>
                </div>
                <div className="border-top border-bottom d-flex">
                    <div className="pt-2 pb-2 border-middle d-flex align-items-center justify-content-center flex-column width-middle">
                        <b>Forma de Pagamento</b>
                        <span>{negociacao.formaPagamento}</span>
                    </div>
                    <div className="pt-2 pb-2  d-flex align-items-center justify-content-center flex-column width-middle">
                        <b>Parcelamento</b>
                        <span>
                            {negociacao.parcelamento} de {formatPrice(negociacao.negociado / negociacao.parcelamento)}
                        </span>
                    </div>
                </div>
                <div className="mt-1 pt-1 pb-1 d-flex">
                    <div className="p-2 d-flex align-items-center justify-content-center flex-column width-full">
                        <b>Valor da Dívida</b>
                        <span>{formatPrice(negociacao.divida)}</span>
                    </div>
                </div>
                <div className="border-top border-bottom d-flex">
                    <div className="pt-2 pb-2 border-middle d-flex align-items-center justify-content-center flex-column width-middle">
                        <b>Desconto</b>
                        <span>{formatPrice(negociacao.desconto)}</span>
                    </div>
                    <div className="pt-2 pb-2 d-flex align-items-center justify-content-center flex-column width-middle">
                        <b>Total</b>
                        <span>{formatPrice(negociacao.divida - negociacao.desconto)}</span>
                    </div>
                </div>

                {parcelas
                    .sort((a, b) => (a.parcela > b.parcela ? 1 : -1))
                    .map((item, index) => {
                        return (
                            <DetailsItem
                                key={index}
                                generateBillet={handleGenerateBillet}
                                debitoId={negociacao.debitoId}
                                nextPayment={nextPayment}
                                {...item}
                            />
                        );
                    })}
            </div>
        </>
    );
};

export default Detaisl;
