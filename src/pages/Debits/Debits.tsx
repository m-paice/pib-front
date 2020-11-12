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
import Fotoperfil from "../../assets/imagens/fotoperfil.png";
import Carafeliz from "../../assets/imagens/carafeliz.png";

// utils
import formatPrice from "../../utils/formatPrice";

type IDebt = Debt;

interface Props {
    payload: {
        data: {
            debts: IDebt[];
            isDebitsPaid: boolean;
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
    const { debts, isDebitsPaid } = data;
    const { handleLoadDebts } = actions;

    useEffect(() => {
        handleLoadDebts();
    }, []);

    if (!debts.length) {
        return <p> Nenhum débito </p>;
    }

    return (
        <div className="page">
            <div className="container">
                {!isDebitsPaid ? (
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
                ) : (
                    <div className="row container">
                        <div className="col-xs-12 col-sm-3 col-sm-offset-1">
                            <img className="pessoa" src={Fotoperfil} />
                            <img className="cara" src={Carafeliz} />
                        </div>

                        <div className="col-xs-12 col-sm-8 titulos">
                            <h2>Parabéns,</h2>
                            <h3>não encontramos dívidas abertas em seu nome.</h3>
                        </div>
                    </div>
                )}

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
