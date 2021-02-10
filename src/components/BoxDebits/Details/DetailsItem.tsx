import React, { useState } from "react";

import { Plus, Dash } from "react-bootstrap-icons";

import { Parcelas } from "../../../store/modules/pf/debt/types";

import formatDate from "../../../utils/formatDate";
import formatPrice from "../../../utils/formatPrice";

interface Props extends Parcelas {
    debitoId: string;
    nextPayment: string;
    generateBillet(data): void;
}
interface Situation {
    label: string;
    class: string;
}

const DetailsItem: React.FC<Props> = (props) => {
    const {
        id,
        parcela,
        situacao,
        vencimento,
        valorParcela,
        dataPagamento,
        debitoId,
        boletoUrl,
        nextPayment,
        generateBillet,
    } = props;

    const [openDetails, setOpenDetails] = useState(false);

    const handleToggleOpenDetails = () => {
        setOpenDetails(!openDetails);
    };

    const handleSituation = (): Situation => {
        const renderSituation = {
            proxima: {
                label: "Próxima",
                class: "proxima",
            },
            aguardando: {
                label: "Aguardando pagamento",
                class: "aguardando",
            },
            atraso: {
                label: "Em atraso",
                class: "ematraso",
            },
            pago: {
                label: "Paga",
                class: "paga",
            },
        };

        return renderSituation[situacao];
    };

    return (
        <>
            <div className="web">
                <div className="d-flex nopadding mt-3">
                    <div className="col-md-2">{parcela}</div>
                    <div className="col-md-2">{formatDate(new Date(vencimento))}</div>
                    <div className="col-md-2">{formatPrice(valorParcela)}</div>
                    <div className="col-md-2">{dataPagamento && formatDate(new Date(dataPagamento))}</div>
                    <div className="col-md-2">
                        <span className={handleSituation().class}> {handleSituation().label} </span>
                    </div>

                    {situacao === "aguardando" && (
                        <div className="col-md-2">
                            <a href={boletoUrl} download target="blank" style={{ color: "#fff" }}>
                                {" "}
                                <b>download boleto</b>{" "}
                            </a>
                        </div>
                    )}

                    {nextPayment === id && (
                        <div className="col-md-2">
                            <a
                                style={{ cursor: "pointer" }}
                                onClick={() => generateBillet({ id, debitoId })}
                                className="proxima txt-10-mob"
                            >
                                Gerar Boleto
                            </a>
                        </div>
                    )}
                </div>
            </div>
            <div className="mobile">
                <div className="d-flex mt-3 align-items-center justify-content-between">
                    <div className="d-flex align-items-center justify-content-center">
                        <a className="smais">
                            {openDetails ? (
                                <Dash className="btn glyphicon" onClick={handleToggleOpenDetails} />
                            ) : (
                                <Plus className="btn glyphicon" onClick={handleToggleOpenDetails} />
                            )}
                        </a>
                        <b className="ml-2">Parcela {parcela} - Situação</b>
                    </div>
                    <div className="d-flex align-items-center width90">
                        <span className={"ml-0 " + handleSituation().class}> {handleSituation().label} </span>
                    </div>
                </div>
                {openDetails && (
                    <div className="pl-4 pr-4 pt-1 pb-3">
                        <div className="d-flex flex-column align-items-start">
                            <b>Vencimento</b>
                            <span>{formatDate(new Date(vencimento))}</span>
                        </div>

                        <div className="d-flex flex-column align-items-start">
                            <b>Valor da Parcela</b>
                            <span>{formatPrice(valorParcela)}</span>
                        </div>

                        <div className="d-flex flex-column align-items-start">
                            <b>Data de Pagamento</b>
                            <span>{dataPagamento && formatDate(new Date(dataPagamento))}</span>
                        </div>

                        {nextPayment === id && (
                            <div className="d-flex flex-column align-items-start">
                                <a
                                    style={{ cursor: "pointer" }}
                                    onClick={() => generateBillet({ id, debitoId })}
                                    className="ml-0 proxima "
                                >
                                    Gerar Boleto
                                </a>
                            </div>
                        )}

                        {situacao === "aguardando" && (
                            <div className="d-flex flex-column align-items-start">
                                <a
                                    href={boletoUrl}
                                    style={{ marginLeft: 0 }}
                                    className="proxima"
                                    download
                                    target="blank"
                                >
                                    <span>download boleto</span>
                                </a>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default DetailsItem;
