import React, { useState, useEffect } from "react";

import { Plus, Dash } from "react-bootstrap-icons";
import { differenceInCalendarMonths } from "date-fns";

import { Debt } from "../../../store/modules/pf/debt/types";

// components
import Negociation from "../Negociation";
import MoreInfo from "../MoreInfo";

// utils
import formatDate from "../../../utils/formatDate";
import formatPrice from "../../../utils/formatPrice";

import { status as statusSituation } from "../../../store/modules/pf/debt/selectors";

const tiposDocumentos = {
    CH: "Cheque",
    CN: "Carnê",
    CQ: "Não souberam me informar...",
    CT: "Contrato",
    DP: "Duplicata",
    NP: "Nota promissória",
    OU: "Outros",
    XX: "Não definido",
};

type Props = Debt;

interface State {
    info: boolean;
    negociation: boolean;
    discount: number;
}

const DeniedDebts: React.FC<Props> = (props) => {
    const { id, lojista, inclusao, valor, status, vencimento, tipoDoc } = props;

    const [state, setState] = useState<State>({
        info: false,
        negociation: false,
        discount: 0,
    });

    const [amountMonth, setAmountMonth] = useState(0);

    const { info, negociation } = state;

    useEffect(() => {
        const handleDayNumber = (date: Date) => {
            return Number(String(formatDate(date)).split("/")[0]);
        };

        const currentMonth = new Date();
        const registerMonth = new Date(inclusao); // TODO: adicinar inclusao

        const amountMonthNumber = differenceInCalendarMonths(currentMonth, registerMonth);

        if (handleDayNumber(registerMonth) > handleDayNumber(currentMonth)) {
            setAmountMonth(amountMonthNumber - 1);
        } else setAmountMonth(amountMonthNumber);
    }, []);

    // reset collapse
    useEffect(() => {
        if (info) setState((prevState) => ({ ...prevState, negociation: false }));
    }, [info]);

    useEffect(() => {
        if (negociation) setState((prevState) => ({ ...prevState, info: false }));
    }, [negociation]);

    const handleSetState = (key: string, value: string | boolean) => {
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <div className="cada debito">
            <div className="row rowCenter">
                <div className="col-md-1">
                    <a href="javascript:void(0);" className="smais">
                        {info ? (
                            <Dash className="btn glyphicon" onClick={() => handleSetState("info", !info)} />
                        ) : (
                            <Plus className="btn glyphicon" onClick={() => handleSetState("info", !info)} />
                        )}
                    </a>
                </div>
                <div className=" col-md-2">
                    <span className="labelDebito text-left">{lojista.usuario.nome}</span>
                </div>
                <div className="col-md-7 d-flex justify-content-between">
                    <div style={{ width: 75 }}>
                        <div className="lab">
                            <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                                Tipo
                                <span className="glyphicon glyphicon-question-sign ml-1"></span>
                            </div>
                        </div>
                        <div className="txt-12 m-0 font-weight-bold"> {tiposDocumentos[tipoDoc]} </div>
                    </div>
                    <div className="div c"></div>
                    <div>
                        <div className="lab">
                            <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                                Vencimento
                                <span className="glyphicon glyphicon-question-sign ml-1"></span>
                            </div>
                        </div>
                        <div className="txt-12 m-0 font-weight-bold"> {formatDate(new Date(vencimento))}</div>
                    </div>
                    <div className="div c"></div>
                    <div>
                        <div className="lab">
                            <div
                                className="help"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Este é um texto de ajuda com número de caracteres elevado."
                            >
                                Valor da dívida
                                <span className="glyphicon glyphicon-question-sign ml-1"></span>
                            </div>
                        </div>
                        <div className="txt-12 m-0 font-weight-bold">{formatPrice(Number(valor))}</div>
                    </div>
                    <div className="div c"></div>
                    <div>
                        <div className="lab">
                            <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                                Registro
                                <span className="glyphicon glyphicon-question-sign ml-1"></span>
                            </div>
                        </div>
                        <div className="txt-12 m-0 font-weight-bold">{formatDate(new Date(inclusao))}</div>
                    </div>
                </div>
                <div className=" col-md-2 cb ">
                    {!lojista.usuario.habilitado ? (
                        <a onClick={() => handleSetState("info", !info)} className="btneg gray btn">
                            Contate o credor
                        </a>
                    ) : (
                        <a onClick={() => handleSetState("negociation", !negociation)} className="btneg btn">
                            Quero Negociar
                        </a>
                    )}
                </div>
            </div>

            {negociation && (
                <Negociation debit={Number(valor)} monthForRule={amountMonth} lojistaId={lojista.id} debitoId={id} />
            )}

            {info && <MoreInfo {...lojista} />}
        </div>
    );
};

export default DeniedDebts;
