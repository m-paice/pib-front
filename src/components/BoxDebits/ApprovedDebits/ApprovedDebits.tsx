import React, { useState, useEffect } from "react";

import { Debt } from "../../../store/modules/pj/debt/types";

// components
import MoreInfo from "../MoreInfo";
import Details from "../Details";

// utils
import formatDate from "../../../utils/formatDate";

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

interface handleCheckStatusReturn {
    title: string;
    class: string;
}

const ApprovedDebits: React.FC<Props> = (props) => {
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

    // check status of debits
    const handleCheckStatus = (): handleCheckStatusReturn => {
        const { situation } = props;

        const renderStatus = {
            done: {
                title: "Pago",
                class: "green",
            },
            late: {
                title: "Em atraso",
                class: "red",
            },
            next: {
                title: "Próximo",
                class: "blue",
            },
            open: {
                title: "",
                class: "",
            },
        };

        return renderStatus[situation];
    };

    const { company, maturities } = props;

    return (
        <div className="cada debito ativo">
            <div className="row rowCenter">
                <div className="col-md-1">
                    <a className="smais">
                        <span
                            className={`btn glyphicon ${info ? "glyphicon-minus" : "glyphicon-plus"} align-btn-b`}
                            onClick={() => handleSetState("info", !info)}
                        ></span>
                    </a>
                </div>
                <div className=" col-md-3 c colBorder">
                    <span className="labelDebito text-left p-left">{company.name}</span>
                </div>

                <div className="col-md-6 c nobri">
                    <span className="labelDebito text-center hidden-xs">Já negociada em {formatDate(maturities)}</span>
                </div>
                <div className="col-md-2 cb">
                    <a
                        className={`btneg ${handleCheckStatus().class}`}
                        onClick={() => handleSetState("negociation", !negociation)}
                    >
                        {handleCheckStatus().title}
                    </a>
                </div>
            </div>

            {info && <MoreInfo />}
            {negociation && <Details />}
        </div>
    );
};

export default ApprovedDebits;