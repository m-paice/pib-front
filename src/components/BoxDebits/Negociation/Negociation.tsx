import React, { useState } from "react";

// components
import Billet from "./Billet";
import Card from "./Card";

interface Props {}

interface State {
    payment: "billet" | "card";
}

const Negociation: React.FC<Props> = (props) => {
    const [state, setState] = useState<State>({
        payment: "billet",
    });

    const handleSetState = (key: string, value: string) => {
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handlePaymentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { target } = event;

        handleSetState("payment", target.value);
    };

    const { payment } = state;

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
                                    type="radio"
                                    name="payment"
                                    value="billet"
                                    checked={payment === "billet"}
                                    onChange={handlePaymentChange}
                                />
                                Boleto
                            </label>
                            <br />
                            <label className="cartaoc">
                                <input type="radio" name="payment" value="card" onChange={handlePaymentChange} /> Cartão
                                de Crédito
                            </label>
                            <br />
                            <label>
                                <div className="font-weight-bold">Parcelamento</div>
                                <br />
                                <select style={{ color: "#000" }} className="sel parcelamentoSelect">
                                    <option style={{ color: "#000" }} value="0">
                                        Escolha o plano
                                    </option>
                                    <option style={{ color: "#000" }} value="1">
                                        1x R$ 300,00
                                    </option>
                                    <option style={{ color: "#000" }} value="2">
                                        2x R$ 150,00
                                    </option>
                                    <option style={{ color: "#000" }} value="3">
                                        3x R$ 100,00
                                    </option>
                                </select>
                            </label>
                            <br />
                            <label>
                                <div className="font-weight-bold">Data de Vencimento</div>
                                <input type="date" className="imp" id="datepicker" />
                            </label>
                        </div>
                        <div className="col-md-6">
                            <div className="font-weight-bold">Resumo de seu acordo</div>
                            <label>
                                <div className="font-weight-bold">Valor da dívida</div>
                                <input className="imp" disabled placeholder="R$ 100,00" />
                            </label>
                            <div className="font-weight-bold">Valor do desconto</div>
                            <label>
                                <input className="imp desconto disabled-bc" disabled value="- R$ 100,00" />
                            </label>
                            <div className="font-weight-bold">Total</div>
                            <label>
                                <input className="imp disabled-bc" disabled placeholder="R$ 100,00" />
                            </label>
                            <a className="cacordo confirmarAcordo font-weight-bold" href="javascript:void(0);">
                                Confirmar Acordo
                            </a>
                        </div>
                    </div>
                </div>

                {payment === "billet" && (
                    <div className="col-md-6">
                        <Billet />
                    </div>
                )}
                {payment === "card" && (
                    <div className="col-md-6">
                        <Card />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Negociation;
