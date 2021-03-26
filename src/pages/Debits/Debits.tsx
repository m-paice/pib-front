import React, { useEffect, useState } from "react";

// container
import { debtsContainer } from "./DebitsContainer";

import { Debt } from "../../store/modules/pf/debt/types";

import Fotoperfil2 from "../../assets/imagens/fotoperfil2.png";
import Caratriste from "../../assets/imagens/caratriste.png";
import Fotoperfil from "../../assets/imagens/fotoperfil.png";
import Carafeliz from "../../assets/imagens/carafeliz.png";

// components
import WarningText from "../../components/WarningText";
import TableDebits from "../../components/Table/TableDebits";

// utils
import formatPrice from "../../utils/formatPrice";

type IDebt = Debt;

interface Props {
    payload: {
        data: {
            debts: IDebt[];
            isDebitsPaid: boolean;
            allPaidOut: boolean;
            activeNotifications: boolean;
            typeActiveAccountContrary: string;
        };
        actions: {
            generateBillet(data): void;
            renegotiateDebit(id): void;
            negociation(data): void;
            handleActiveNotification(data): void;
        };
        amount: number;
        value: number;
    };
}

const Debits: React.FC<Props> = ({ payload }) => {
    const { data, actions, amount, value } = payload;
    const { debts, isDebitsPaid, allPaidOut, activeNotifications, typeActiveAccountContrary } = data;
    const { generateBillet, renegotiateDebit, negociation, handleActiveNotification } = actions;

    const [tbody, setTbody] = useState<Debt[]>(debts);

    useEffect(() => {
        setTbody(payload.data.debts);
    }, [payload.data]);

    const handleClickActiveNotification = () => {
        const notification = typeActiveAccountContrary === "Telefone" ? "sms" : "email";

        handleActiveNotification({ typeActiveAccount: notification });
    };

    return (
        <div className="page">
            {!activeNotifications && (
                <WarningText>
                    Você ainda não ativou {typeActiveAccountContrary}. &nbsp;
                    <a href="#" onClick={handleClickActiveNotification}>
                        Clique aqui para ativar agora
                    </a>
                </WarningText>
            )}

            <div className="container">
                {!!isDebitsPaid ? (
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

                <TableDebits
                    tbody={tbody}
                    generateBillet={generateBillet}
                    renegotiateDebit={renegotiateDebit}
                    negociar={negociation}
                />
            </div>
        </div>
    );
};

export default debtsContainer(Debits);
