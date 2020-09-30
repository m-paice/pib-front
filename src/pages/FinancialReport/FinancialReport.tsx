import React, { useEffect, useState } from "react";

import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch } from "react-redux";

import { financialReportContainer } from "./FinancialReportContainer";

import { Wallet } from "../../store/modules/pj/wallet/types";

import { actions as actionsWallet } from "../../store/modules/pj/wallet/actions";

import Table from "../../components/Table/TableFinancial";

const header = [
    { text: "Data", title: "Data", reference: "date" },
    { text: "CPF / CNPJ", title: "CPF / CNPJ", reference: "document" },
    { text: "Nome", title: "Nome", reference: "name" },
    { text: "Operação", title: "Operação", reference: "operation" },
    { text: "Valor", title: "Valor", reference: "value" },
];

interface Props {
    payload: {
        data: Wallet[];
        totalValueTransactions: number;
    };
}

const FinancialReport: React.FC<Props> = ({ payload }) => {
    const { data, totalValueTransactions } = payload;

    const dispatch = useDispatch();

    const [tbody, setTbody] = useState<Wallet[]>(data);

    const [transfer, setTransfer] = useState(false);

    useEffect(() => {
        dispatch(actionsWallet.loadWallet());
    }, []);

    useEffect(() => {
        setTbody(payload.data);
    }, [payload.data]);

    const handleSetTransfer = () => {
        setTransfer(!transfer);
    };

    const isValidValue = totalValueTransactions > 25;

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6" style={{ fontSize: 35 }}>
                        <b>Seu Saldo: &nbsp;</b>
                        <span style={{ color: isValidValue ? "green" : "red" }}>
                            {totalValueTransactions.toLocaleString("pt-br", { style: "currency", currency: "BRL" })}
                        </span>
                    </div>

                    <div className="col-sm-3">
                        <select className="form-control selectAzul">
                            <option>Maio - 2020</option>
                            <option>Junho - 2020</option>
                            <option>Julho - 2020</option>
                        </select>
                    </div>
                    <div className="col-sm-3">
                        <input placeholder="Pesquisar:" className="form-control inputAzul" />
                    </div>

                    <div className="col-xs-12 col-sm-4 align-self-start">
                        <button className="btn-azul align-left" onClick={handleSetTransfer}>
                            TRANSFERIR
                        </button>
                    </div>
                    {transfer && (
                        <div>
                            {isValidValue ? (
                                <SweetAlert
                                    title={
                                        <div className="txt-sweet-alert">
                                            Tem certeza que deseja <br /> sacar este valor agora?
                                        </div>
                                    }
                                    style={{
                                        background: "#14647b",
                                        color: "#fff !important",
                                    }}
                                    showCancel
                                    confirmBtnCssClass="btn-sweet-alert"
                                    cancelBtnCssClass="btn-sweet-alert"
                                    confirmBtnText="Quero sacar"
                                    cancelBtnText="Cancelar"
                                    onConfirm={handleSetTransfer}
                                    onCancel={handleSetTransfer}
                                />
                            ) : (
                                <SweetAlert
                                    title={
                                        <div className="txt-sweet-alert">
                                            Opa! Valor não disponível <br /> para saque.
                                        </div>
                                    }
                                    style={{
                                        background: "#14647b",
                                        color: "#fff !important",
                                    }}
                                    confirmBtnCssClass="btn-sweet-alert"
                                    confirmBtnText="Voltar"
                                    onConfirm={handleSetTransfer}
                                />
                            )}
                        </div>
                    )}
                </div>

                <Table thead={header} tbody={tbody} />
            </div>
        </div>
    );
};

export default financialReportContainer(FinancialReport);
