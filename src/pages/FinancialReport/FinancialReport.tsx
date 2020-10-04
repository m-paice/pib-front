import React, { useEffect, useState } from "react";

import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch } from "react-redux";

import { financialReportContainer } from "./FinancialReportContainer";

import { Wallet } from "../../store/modules/pj/wallet/types";

import { actions as actionsWallet } from "../../store/modules/pj/wallet/actions";

// components
import Table from "../../components/Table/TableFinancial";
import Select from "../../components/unconnected/Fields/Select";

// utils
import monthNames from "../../utils/monthNames";

const header = [
    { text: "Data", title: "Data", reference: "date" },
    { text: "CPF / CNPJ", title: "Documento", reference: "document" },
    { text: "Nome", title: "Nome", reference: "name" },
    { text: "Operação", title: "Operação", reference: "operation" },
    { text: "Valor", title: "Valor", reference: "value" },
];

const options = [
    { value: 4, label: "maio - 2020" },
    { value: 5, label: "junho - 2020" },
    { value: 6, label: "junlho - 2020" },
    { value: 7, label: "agosto - 2020" },
    { value: 8, label: "setembro - 2020" },
    { value: 9, label: "outubro - 2020" },
    { value: 10, label: "novembro - 2020" },
];

interface Props {
    payload: {
        data: Wallet[];
        totalValueTransactions: number;
        handleFilterCurrentMonth(month: number): Wallet[];
    };
}

const FinancialReport: React.FC<Props> = ({ payload }) => {
    const { data, totalValueTransactions, handleFilterCurrentMonth } = payload;

    const dispatch = useDispatch();

    const [tbody, setTbody] = useState<Wallet[]>(data);
    const [searchData, setSearchData] = useState<Wallet[]>([]);

    const [transfer, setTransfer] = useState(false);
    const [monthSelected, setMonthSelected] = useState({
        value: new Date().getMonth(),
        label: `${monthNames[new Date().getMonth()]} - ${new Date().getFullYear()}`,
    });

    useEffect(() => {
        dispatch(actionsWallet.loadWallet());
    }, []);

    useEffect(() => {
        const transactions = handleFilterCurrentMonth(monthSelected.value);

        setTbody(transactions);
    }, [payload.data]);

    useEffect(() => {
        const transactions = handleFilterCurrentMonth(monthSelected.value);
        setTbody(transactions);
    }, [monthSelected]);

    const handleSetTransfer = () => {
        setTransfer(!transfer);
    };

    const handleSetvalue = (month: any) => {
        setMonthSelected(month);
    };

    const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (!value.length) return setSearchData([]);

        const valueFound = tbody.filter((item) => String(item.value).includes(value));

        return setSearchData(valueFound);
    };

    const isValidValue = totalValueTransactions > 25;

    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6" style={{ fontSize: 35 }}>
                        <b>Seu Saldo: &nbsp;</b>
                        <span style={{ color: isValidValue ? "green" : "red" }}>{totalValueTransactions}</span>
                    </div>

                    <div className="col-sm-3">
                        <Select options={options} value={monthSelected} onChange={handleSetvalue} />
                    </div>
                    <div className="col-sm-3">
                        <input
                            placeholder="Pesquisar:"
                            onChange={handleSearchValue}
                            className="form-control inputAzul"
                        />
                    </div>

                    <div className="col-xs-12 col-sm-4 align-self-start">
                        <button className="btn-azul align-left" onClick={handleSetTransfer}>
                            SAQUE
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
                                            Opa! Você não possui valor mínimo <br /> para saque que é de R$25,00
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

                <Table thead={header} tbody={searchData.length !== 0 ? searchData : tbody} />
            </div>
        </div>
    );
};

export default financialReportContainer(FinancialReport);
