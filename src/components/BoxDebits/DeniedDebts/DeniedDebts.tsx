import React, { useState, useEffect } from "react";

import { Plus, Dash } from "react-bootstrap-icons";

import { Debt } from "../../../store/modules/pf/debt/types";

// components
import Negociation from "../Negociation";
import MoreInfo from "../MoreInfo";

// utils
import formatDate from "../../../utils/formatDate";
import formatPrice from "../../../utils/formatPrice";

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

interface Props extends Debt {
    negociar(data): void;
}

interface State {
    info: boolean;
    negociation: boolean;
    discount: number;
}

const DeniedDebts: React.FC<Props> = (props) => {
    const { id, lojista, inclusao, valor, status, vencimento, tipoDoc, reguaNegociacao, negociar } = props;

    const [state, setState] = useState<State>({
        info: false,
        negociation: false,
        discount: 0,
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

    return (
        <>
            <div className="web">
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
                                    <div
                                        className="help"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Texto ajuda"
                                    >
                                        Tipo
                                        <span className="glyphicon glyphicon-question-sign ml-1"></span>
                                    </div>
                                </div>
                                <div className="txt-12 m-0 font-weight-bold"> {tiposDocumentos[tipoDoc]} </div>
                            </div>
                            <div className="div c"></div>
                            <div>
                                <div className="lab">
                                    <div
                                        className="help"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Texto ajuda"
                                    >
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
                                <div className="txt-12 m-0 font-weight-bold">{formatPrice(valor)}</div>
                            </div>
                            <div className="div c"></div>
                            <div>
                                <div className="lab">
                                    <div
                                        className="help"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="Texto ajuda"
                                    >
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
                        <Negociation
                            debito={valor}
                            lojistaId={lojista.id}
                            debitoId={id}
                            reguaNegociacao={reguaNegociacao}
                            negociar={negociar}
                        />
                    )}

                    {info && <MoreInfo {...lojista} />}
                </div>
            </div>
            <div className="mobile">
                <div className="p-2 cada debito">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center ">
                            <a className="smais">
                                {info ? (
                                    <Dash className="btn glyphicon" onClick={() => handleSetState("info", !info)} />
                                ) : (
                                    <Plus className="btn glyphicon" onClick={() => handleSetState("info", !info)} />
                                )}
                            </a>

                            <span className="ml-2 labelDebito text-left">{lojista.usuario.nome}</span>
                        </div>
                        <div className="width180">
                            {!lojista.usuario.habilitado ? (
                                <a onClick={() => handleSetState("info", !info)} className=" btneg gray btn">
                                    Contate o credor
                                </a>
                            ) : (
                                <a
                                    onClick={() => handleSetState("negociation", !negociation)}
                                    className="width180 btneg btn"
                                >
                                    Quero Negociar
                                </a>
                            )}
                        </div>
                    </div>

                    {negociation && (
                        <Negociation
                            debito={valor}
                            lojistaId={lojista.id}
                            debitoId={id}
                            reguaNegociacao={reguaNegociacao}
                            negociar={negociar}
                        />
                    )}

                    {info && <MoreInfo {...lojista} />}
                </div>
            </div>
        </>
    );
};

export default DeniedDebts;
