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

type Props = Debt;

interface State {
    info: boolean;
    negociation: boolean;
    discount: number;
}

const DeniedDebts: React.FC<Props> = (props) => {
    const { id, company, maturities, debt, dateRegister } = props;

    const [state, setState] = useState<State>({
        info: false,
        negociation: false,
        discount: 0,
    });

    const [amountMonth, setAmountMonth] = useState(0);

    const { info, negociation } = state;

    useEffect(() => {
        const handleDayNumber = (date: Date) => Number(String(formatDate(date)).split("/")[0]);

        const currentMonth = new Date();
        const registerMonth = new Date(dateRegister);

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

    const [companyMain] = company;

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
                    <span className="labelDebito text-left">{companyMain.name}</span>
                </div>
                <div className="col-md-7 d-flex justify-content-between">
                    <div style={{ width: 75 }}>
                        <div className="lab">
                            <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                                Tipo
                                <span className="glyphicon glyphicon-question-sign ml-1"></span>
                            </div>
                        </div>
                        <div className="txt-12 m-0 font-weight-bold">{companyMain.type}</div>
                    </div>
                    <div className="div c"></div>
                    <div>
                        <div className="lab">
                            <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                                Vencimento
                                <span className="glyphicon glyphicon-question-sign ml-1"></span>
                            </div>
                        </div>
                        {/* <div className="txt-12 m-0 font-weight-bold">{formatDate(maturities)}</div> */}
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
                        <div className="txt-12 m-0 font-weight-bold">R$ {formatPrice(debt)}</div>
                    </div>
                    <div className="div c"></div>
                    <div>
                        <div className="lab">
                            <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                                Registro
                                <span className="glyphicon glyphicon-question-sign ml-1"></span>
                            </div>
                        </div>
                        <div className="txt-12 m-0 font-weight-bold">01/01/2020</div>
                    </div>
                </div>
                <div className=" col-md-2 cb ">
                    <a onClick={() => handleSetState("negociation", !negociation)} className="btneg btn">
                        Quero Negociar
                    </a>
                </div>
            </div>

            {negociation && <Negociation debit={debt} monthForRule={amountMonth} />}

            {info && <MoreInfo {...companyMain} />}
        </div>
    );
};

export default DeniedDebts;
