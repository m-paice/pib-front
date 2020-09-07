import React from "react";

// container
import { debtsContainer } from "./DebitsContainer";

import { Debt } from "../../store/modules/pj/debt/types";
import { Company } from "../../store/modules/pj/company/types";

// components
import ApprovedDebits from "../../components/BoxDebits/ApprovedDebits";
import DeniedDebts from "../../components/BoxDebits/DeniedDebts";

import Fotoperfil2 from "../../assets/imagens/fotoperfil2.png";
import Caratriste from "../../assets/imagens/caratriste.png";

// utils
import formatPrice from "../../utils/formatPrice";

interface IDebt extends Debt {
    company: Company;
}

interface Props {
    payload: {
        data: {
            debts: IDebt[];
            debtsPending: IDebt[];
        };
        amount: number;
        value: number;
    };
}

const Debits: React.FC<Props> = ({ payload }) => {
    const { data, amount, value } = payload;
    const { debts, debtsPending } = data;

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

                {debts.map((debt) => (
                    <ApprovedDebits key={debt.id} {...debt} />
                ))}

                {debtsPending.map((debt) => (
                    <DeniedDebts key={debt.id} {...debt} />
                ))}
            </div>
        </div>
    );
};

export default debtsContainer(Debits);
