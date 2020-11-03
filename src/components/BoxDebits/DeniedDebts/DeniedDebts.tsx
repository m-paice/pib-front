import React, { useState, useEffect } from "react";

import { Debt } from "../../../store/modules/pf/debt/types";

// components
import Negociation from "../Negociation";
import MoreInfo from "../MoreInfo";

// utils
import formatDate from "../../../utils/formatDate";
import formatPrice from "../../../utils/formatPrice";

interface Company {
    name: string;
}

interface Props extends Debt {
    company: Company;
}

interface State {
    info: boolean;
    negociation: boolean;
}

const DeniedDebts: React.FC<Props> = (props) => {
    const [state, setState] = useState<State>({
        info: false,
        negociation: false,
    });

    const { info, negociation } = state;

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

    const { company, maturities, debt } = props;

    return (
        <div className="cada debito">
            <div className="row rowCenter">
                <div className="col-md-1">
                    <a href="javascript:void(0);" className="smais">
                        <span
                            className={`glyphicon ${info ? "glyphicon-minus" : "glyphicon-plus"} align-btn-b `}
                            onClick={() => handleSetState("info", !info)}
                        ></span>
                    </a>
                </div>
                <div className=" col-md-2">
                    <span className="labelDebito text-left">{company.name}</span>
                </div>
                <div className="col-md-7 d-flex justify-content-between">
                    <div>
                        <div className="lab">
                            <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                                Tipo
                                <span className="glyphicon glyphicon-question-sign ml-1"></span>
                            </div>
                        </div>
                        <div className="txt-12 m-0 font-weight-bold">Telefonia Fixa</div>
                    </div>
                    <div className="div c"></div>
                    <div>
                        <div className="lab">
                            <div className="help" data-toggle="tooltip" data-placement="top" title="Texto ajuda">
                                Vencimento
                                <span className="glyphicon glyphicon-question-sign ml-1"></span>
                            </div>
                        </div>
                        <div className="txt-12 m-0 font-weight-bold">{formatDate(maturities)}</div>
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

            {negociation && <Negociation />}

            {info && <MoreInfo />}
        </div>
    );
};

export default DeniedDebts;
