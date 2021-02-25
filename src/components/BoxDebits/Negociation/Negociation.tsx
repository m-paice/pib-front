import React, { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { addDays } from "date-fns";

// types
import { ApplicationState } from "../../../store";
import { RuleNegociation } from "../../../store/modules/pf/debt/types";

// actions
import { actions as actionsDebits } from "../../../store/modules/pf/debt/actions";
import { actions as actionsNotification } from "../../../store/modules/app/notification/actions";

// components
import Billet from "./Billet";
import Card from "./Card";

// hooks
import { paymentPagarme } from "../../../hooks/usePagarme";

// utils
import formatDate from "../../../utils/formatDate";
import formatPrice from "../../../utils/formatPrice";
import generateDate from "../../../utils/generateDate";

import SweetAlert from "../../../components/SweetAlert";
import Alert from "../../../components/Alert";

const stylesErrosMessage: React.CSSProperties = {
    color: "#ff0000",
    fontSize: 11,
};

interface Props {
    debito: number;
    lojistaId: string;
    debitoId: string;
    reguaNegociacao: RuleNegociation;
}

interface State {
    payment: "boleto" | "cartao";
    portion: number;
    datePayment: string;
    confirmWakeUp: boolean;
    modal: boolean;
    errors: object;
}

interface Parcelas {
    valorParcela: number;
}

interface StateData {
    valorTotal: number;
    valorDesconto: number;
    desconto: number;
    parcelas: Parcelas[];
    parcelaSelecionada: number;
}

interface StateMap {
    [key: number]: {
        atenuador: number;
        desconto: number;
        valorTotal: number;
        valorDesconto: number;
    };
}

const Negociation: React.FC<Props> = (props) => {
    const { debito, lojistaId, debitoId, reguaNegociacao } = props;

    const dispatch = useDispatch();

    // const [options, setOptions] = useState<number[]>([]);

    const [data, setData] = useState<StateData>({
        valorTotal: 0,
        valorDesconto: 0,
        desconto: 0,
        parcelas: [],
        parcelaSelecionada: 0,
    });

    const [notification, setNotification] = useState({
        show: false,
        message: "",
    });

    const [map, setMap] = useState<StateMap>({
        0: {
            atenuador: 0,
            desconto: 1,
            valorDesconto: 1,
            valorTotal: 1,
        },
    });

    const [state, setState] = useState<State>({
        payment: "boleto",
        portion: 0,
        datePayment: "",
        confirmWakeUp: true, // TODO: fazer a logica inversa [começar com false]
        modal: false,
        errors: {},
    });

    const negociation = reguaNegociacao;
    const showNotification = useSelector((state: ApplicationState) => state.app.notification.show);

    const { payment, confirmWakeUp } = state;

    useEffect(() => {
        const populateArray = Array.from({ length: negociation.maximoParcela }).map((_, index) => index + 1);

        const response: {
            [key: number]: {
                atenuador: number;
                desconto: number;
                valorTotal: number;
                valorDesconto: number;
            };
        } = {};
        const parcelas: { valorParcela: number }[] = [];

        populateArray.reduce((acc, cur, index) => {
            const atenuador = index * 5;

            if (index === 0) {
                const desconto = 35;
                const valorPagar = debito - debito * (desconto / 100);
                const valorDesconto = debito * (desconto / 100);

                response[index + 1] = {
                    atenuador,
                    desconto,
                    valorDesconto,
                    valorTotal: valorPagar,
                };
                parcelas.push({
                    valorParcela: valorPagar / 1,
                });

                return desconto;
            }

            const desconto = acc - acc * (atenuador / 100);
            const valorPagar = debito - debito * (desconto / 100);
            const valorDesconto = debito * (desconto / 100);

            response[index + 1] = {
                atenuador,
                desconto,
                valorDesconto,
                valorTotal: valorPagar,
            };

            parcelas.push({
                valorParcela: valorPagar / (index + 1),
            });

            return desconto;
        }, 0);

        setMap(response);

        setData((prevState) => ({
            ...prevState,
            parcelas: parcelas.filter((item) => item.valorParcela > 30),
        }));
    }, []);

    const handleSetState = (key: string, value: string | boolean | object | number) => {
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;

        handleSetState("payment", target.value);
    };

    const handleSelectPortionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleSetState("portion", Number(event.target.value));
    };

    const handleSelectDatePaymentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        handleSetState("datePayment", event.target.value);
    };

    const handleConfirmWakeUp = () => {
        if (!state.portion) {
            handleSetState("errors", {
                portion: "Parcelamento é obrigatório.",
            });

            return;
        }

        if (state.payment === "boleto") {
            if (!state.datePayment) {
                handleSetState("errors", {
                    datePayment: "Data do vencimento é obrigatório.",
                });

                return;
            }
        }

        handleSetState("modal", !state.modal);
        handleSetState("errors", {});
    };

    const handleSetNotificationErros = (message = "") => {
        setNotification({
            show: true,
            message,
        });
    };

    const handleConfirmWithCreditCard = (values) => {
        const { payment, portion } = state;

        const dataVencimento = new Date();

        paymentPagarme(
            {
                card_cvv: values.codigoCartao,
                card_expiration_date: values.mesCartao + values.anoCartao,
                card_holder_name: values.nomeCartao,
                card_number: values.numeroCartao,
            },
            (code) =>
                dispatch(
                    actionsDebits.addDebt({
                        cardHash: code,
                        debitoId,
                        lojistaId,
                        reguaNegociacaoId: negociation.id,
                        formaPagamento: payment,
                        parcelamento: portion,
                        dataVencimento,
                    }),
                ),
            (message) => handleSetNotificationErros(message),
        );

        return;
    };

    const handleConfirmWithBillet = () => {
        const { payment, portion, datePayment } = state;
        const dataVencimento = payment === "cartao" ? new Date() : new Date(generateDate(datePayment));
        dispatch(
            actionsDebits.addDebt({
                debitoId,
                lojistaId,
                reguaNegociacaoId: negociation.id,
                formaPagamento: payment,
                parcelamento: portion,
                dataVencimento,
            }),
        );
    };

    const handleConfirm = () => {
        handleSetState("modal", !state.modal);
        handleSetState("confirmWakeUp", !state.confirmWakeUp);

        const { payment } = state;

        if (payment === "boleto") handleConfirmWithBillet();
    };

    const handleCancel = () => {
        handleSetState("modal", !state.modal);
    };

    const handleHideNotification = () => {
        dispatch(actionsNotification.hideNotification());
        dispatch(actionsDebits.loadDebt());
    };

    const handleHideNotificationErrors = () => {
        setNotification({
            show: false,
            message: "",
        });
    };

    return (
        <div className="p-3">
            <div className="pagt font-weight-bold">Pagamento</div>
            <div className="row pagb1">
                <div className="col-md-6" style={{ borderRight: "1px #dedede solid" }}>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="font-weight-bold">Forma de pagamento </div>

                            <label className="boleto">
                                <input
                                    disabled={!confirmWakeUp}
                                    type="radio"
                                    name="payment"
                                    value="boleto"
                                    checked={payment === "boleto"}
                                    onChange={handlePaymentChange}
                                />
                                Boleto
                            </label>
                            <br />
                            <label className="cartaoc">
                                <input
                                    disabled={!confirmWakeUp}
                                    type="radio"
                                    name="payment"
                                    value="cartao"
                                    onChange={handlePaymentChange}
                                />
                                Cartão de Crédito
                            </label>
                            <br />
                            <label>
                                <div className="font-weight-bold">Parcelamento</div>
                                <br />
                                <select
                                    style={{ color: "#000" }}
                                    onChange={handleSelectPortionChange}
                                    value={state.portion}
                                    className="sel parcelamentoSelect"
                                    disabled={!confirmWakeUp}
                                >
                                    <option style={{ color: "#000" }} value={0}>
                                        Escolha uma parcela
                                    </option>
                                    {data.parcelas.map((item, index) => (
                                        <option style={{ color: "#000" }} key={index} value={index + 1}>
                                            {index + 1} x {formatPrice(item.valorParcela)}
                                        </option>
                                    ))}
                                </select>
                                {state.errors["portion"] && (
                                    <span style={stylesErrosMessage}> {state.errors["portion"]} </span>
                                )}
                            </label>
                            <br />
                            <label>
                                <div className="font-weight-bold">
                                    {state.payment === "cartao" ? "Data da Transação" : "Data de Vencimento"}
                                </div>
                                {state.payment === "cartao" ? (
                                    <div>
                                        <div style={{ color: "#000", padding: "7px 3px" }} className="sel">
                                            {formatDate(new Date())}
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <select
                                            style={{ color: "#000" }}
                                            onChange={handleSelectDatePaymentChange}
                                            className="sel parcelamentoSelect"
                                            disabled={!confirmWakeUp}
                                        >
                                            <option style={{ color: "#000" }} value="">
                                                Escolha uma data
                                            </option>
                                            {Array.from({ length: 9 }).map((item, index) => (
                                                <option
                                                    key={index}
                                                    style={{ color: "#000" }}
                                                    value={formatDate(addDays(new Date(), index))}
                                                >
                                                    {formatDate(addDays(new Date(), index))}
                                                </option>
                                            ))}
                                        </select>
                                        {state.errors["datePayment"] && (
                                            <span style={stylesErrosMessage}> {state.errors["datePayment"]} </span>
                                        )}
                                    </>
                                )}
                            </label>
                        </div>

                        <div className="col-md-6">
                            <div className="font-weight-bold">Resumo de seu acordo</div>
                            <label>
                                <div className="font-weight-bold">Valor da dívida</div>
                                <input className="imp" disabled value={formatPrice(debito)} />
                            </label>
                            <div className="font-weight-bold">
                                Valor do desconto (
                                {`${
                                    map[state.portion]?.desconto % 1 === 0
                                        ? map[state.portion]?.desconto
                                        : map[state.portion]?.desconto.toFixed(1) || 0
                                }%`}
                                )
                            </div>
                            <label>
                                <input
                                    className="imp desconto disabled-bc"
                                    disabled
                                    value={formatPrice(map[state.portion]?.valorDesconto || 0)}
                                />
                            </label>
                            <div className="font-weight-bold">Total</div>
                            <label>
                                <input
                                    className="imp disabled-bc"
                                    disabled
                                    value={formatPrice(map[state.portion]?.valorTotal || 0)}
                                />
                            </label>
                            <button
                                style={{ border: "none" }}
                                className="cacordo confirmarAcordo font-weight-bold"
                                onClick={handleConfirmWakeUp}
                            >
                                Quero pagar
                            </button>
                        </div>
                    </div>
                </div>

                {payment === "boleto" && (
                    <div className="col-md-6">
                        <Billet confirm={confirmWakeUp} />
                    </div>
                )}
                {payment === "cartao" && (
                    <div className="col-md-6">
                        <Card disabled={confirmWakeUp} handleConfirm={handleConfirmWithCreditCard} />
                    </div>
                )}
            </div>

            {state.modal && (
                <SweetAlert
                    title="Deseja confirmar acordo?"
                    handleConfirm={handleConfirm}
                    handleCancel={handleCancel}
                />
            )}

            <Alert
                show={notification.show}
                title="Credas informa"
                message={notification.message}
                type="error"
                handleConfirm={handleHideNotificationErrors}
            />

            <Alert
                show={showNotification}
                title="Credas informa"
                message="Parabéns, sua negociação foi feita com sucesso"
                type="success"
                handleConfirm={handleHideNotification}
            />
        </div>
    );
};

export default Negociation;
