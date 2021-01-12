import React, { useState, useEffect } from "react";

import { Plus, Dash } from "react-bootstrap-icons";

import { Debt } from "../../../store/modules/pf/debt/types";
import { status as statusSituation } from "../../../store/modules/pf/debt/selectors";

// components
import MoreInfo from "../MoreInfo";
import Details from "../Details";

// utils
import formatDate from "../../../utils/formatDate";

type Props = Debt;

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
        const { negociacao } = props;

        const renderStatus = {
            0: {
                title: "Processando",
                class: "green",
            },
            1: {
                title: "Em atraso",
                class: "red",
            },
            2: {
                title: "Em dia",
                class: "blue",
            },

            3: {
                title: "Quitada",
                class: "green",
            },
        };

        return renderStatus[statusSituation[negociacao.situacao]];
    };

    const { id, lojista, inclusao, negociacao } = props;

    return (
        <div className="cada debito ativo">
            <div className="row rowCenter">
                <div className="col-md-1">
                    <a className="smais">
                        {info ? (
                            <Dash className="btn glyphicon" onClick={() => handleSetState("info", !info)} />
                        ) : (
                            <Plus className="btn glyphicon" onClick={() => handleSetState("info", !info)} />
                        )}
                    </a>
                </div>
                <div className=" col-md-3 c colBorder">
                    <span className="labelDebito text-left p-left">{lojista.razaoSocial}</span>
                </div>

                <div className="col-md-6 c nobri">
                    <span className="labelDebito text-center hidden-xs">
                        Já negociada em {formatDate(new Date(negociacao.dataRegistro))}
                    </span>
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

            {info && <MoreInfo {...lojista} />}
            {negociation && <Details payment={1} detailsPortion={[]} />}
        </div>
    );
};

export default ApprovedDebits;
