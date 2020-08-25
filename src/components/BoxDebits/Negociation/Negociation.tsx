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
        <div>
            <div className="col-xs-12 pagt ">Pagamento</div>
            <div className="col-xs-12 col-sm-3 pagb1">
                Forma de pagamento
                <br />
                <label className="boleto">
                    <input
                        type="radio"
                        name="payment"
                        value="billet"
                        checked={payment === "billet"}
                        onChange={handlePaymentChange}
                    />{" "}
                    Boleto
                </label>
                <br />
                <label className="cartaoc">
                    <input type="radio" name="payment" value="card" onChange={handlePaymentChange} /> Cartão de Crédito
                </label>
                <br />
                <label>
                    Parcelamento
                    <br />
                    <select className="sel parcelamentoSelect">
                        <option value="0">Escolha o plano</option>
                        <option value="1">1x R$ 300,00</option>
                        <option value="2">2x R$ 150,00</option>
                        <option value="3">3x R$ 100,00</option>
                    </select>
                </label>
                <br />
                <label>
                    Data de Vencimento
                    <input type="date" className="imp" id="datepicker" />
                </label>
            </div>
            <div className="col-xs-12 col-sm-3 pagb2 bbol disabled-bc">
                <div className=".titulo-mob">Resumo de seu acordo</div>
                <label>
                    Valor da dívida
                    <input className="imp" disabled placeholder="R$ 100,00" />
                </label>
                <label>
                    Valor do desconto
                    <input className="imp desconto disabled-bc" disabled value="- R$ 100,00" />
                </label>
                <label>
                    Total
                    <input className="imp disabled-bc" disabled placeholder="R$ 100,00" />
                </label>
                <a className="cacordo confirmarAcordo" href="javascript:void(0);">
                    Confirmar Acordo
                </a>
            </div>
            {payment === "billet" && <Billet />}
            {payment === "card" && <Card />}
        </div>
    );
};

export default Negociation;
