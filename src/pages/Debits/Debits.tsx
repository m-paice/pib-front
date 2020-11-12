import React, { useEffect } from "react";

// container
import { debtsContainer } from "./DebitsContainer";

import { Debt } from "../../store/modules/pf/debt/types";
import { Company } from "../../store/modules/pj/company/types";

// components
import ApprovedDebits from "../../components/BoxDebits/ApprovedDebits";
import DeniedDebts from "../../components/BoxDebits/DeniedDebts";

import Fotoperfil2 from "../../assets/imagens/fotoperfil2.png";
import Caratriste from "../../assets/imagens/caratriste.png";

// utils
import formatPrice from "../../utils/formatPrice";

type IDebt = Debt;

interface Props {
    payload: {
        data: {
            debts: IDebt[];
        };
        actions: {
            handleLoadDebts(): void;
        };
        amount: number;
        value: number;
    };
}

const Debits: React.FC<Props> = ({ payload }) => {
    const { data, actions, amount, value } = payload;
    const { debts } = data;
    const { handleLoadDebts } = actions;

    useEffect(() => {
        handleLoadDebts();
    }, []);

    if (!debts.length) {
        return <p> Carregando... </p>;
    }

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img className="pessoa" src={Fotoperfil2} />
                        <img className="cara" src={Caratriste} />
                    </div>
                    <div className="col-md-9 titulos noneBr">
                        <h2>Ops...</h2>
                        <h3>
                            Identificamos <b>{amount} pendências</b> no seu CPF
                            <br />
                            no total de <b>R$ {formatPrice(value)}</b>
                        </h3>
                    </div>
                </div>

                {debts
                    .filter((item) => item.situation === 0)
                    .map((debt) => (
                        <DeniedDebts key={debt.id} {...debt} />
                    ))}

                {debts
                    .filter((item) => item.situation !== 0)
                    .sort((a, b) => (a.situation > b.situation ? 1 : -1))
                    .map((debt) => (
                        <ApprovedDebits key={debt.id} {...debt} />
                    ))}
            </div>
        </div>
    );
};

export default debtsContainer(Debits);
