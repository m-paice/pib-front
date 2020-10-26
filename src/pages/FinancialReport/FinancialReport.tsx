import React, { useEffect, useState, useRef } from "react";

import SweetAlert from "react-bootstrap-sweetalert";
import { useDispatch } from "react-redux";
import { subDays } from "date-fns";

// interfaces
import { Wallet } from "../../store/modules/pj/wallet/types";
import { User } from "../../store/modules/auth/types";

// actions
import { actions as actionsWallet } from "../../store/modules/pj/wallet/actions";

// components
import { financialReportContainer } from "./FinancialReportContainer";
import Table from "../../components/Table/TableFinancial";
import Select from "../../components/unconnected/Fields/Select";
import AlertWithdraw from "../../components/AlertWithdraw";

// utils
import monthNames from "../../utils/monthNames";

const header = [
    { text: "Data", title: "Data", reference: "date" },
    { text: "CPF ou CNPJ", title: "Documento", reference: "document" },
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

const operations = [
    { value: 0, name: "Saldo mês anterior" },
    { value: 1, name: "Recebimento" },
    { value: 2, name: "Saque" },
    { value: 3, name: "Comissão" },
    { value: 4, name: "Taxa de transferência" },
];

interface Props {
    payload: {
        data: Wallet[];
        totalValueTransactions: number;
        isValidValue: boolean;
        userAuthenticate: User;
        handleFilterCurrentMonth(month: number): Wallet[];
        handleReduceValueOfMonth(): { [key: number]: number };
    };
}

const FinancialReport: React.FC<Props> = ({ payload }) => {
    const {
        data,
        totalValueTransactions,
        isValidValue,
        userAuthenticate,
        handleFilterCurrentMonth,
        handleReduceValueOfMonth,
    } = payload;

    const dispatch = useDispatch();

    const inputRef = useRef<HTMLInputElement>(null);

    const [tbody, setTbody] = useState<Wallet[]>(data);
    const [searchData, setSearchData] = useState<Wallet[]>([]);
    const [lastColumn, setLastColum] = useState("");

    const [transfer, setTransfer] = useState(false);
    const [monthSelected, setMonthSelected] = useState({
        value: new Date().getMonth(),
        label: `${monthNames[new Date().getMonth()]} - ${new Date().getFullYear()}`,
    });

    useEffect(() => {
        // dispatch(actionsWallet.loadWallet());s
    }, []);

    useEffect(() => {
        const transactions = handleFilterCurrentMonth(monthSelected.value);

        if (transactions.length) {
            const valueOfMonth = handleReduceValueOfMonth();

            const response: Wallet[] = [
                {
                    id: Math.random().toString(),
                    date: subDays(new Date(`${monthSelected.value + 1}/01/2020`), 1),
                    cnpj: userAuthenticate.document,
                    nameCompany: userAuthenticate.name,
                    operation: 0,
                    value: valueOfMonth[monthSelected.value - 1],
                },
                ...transactions,
            ];

            return setTbody(response);
        }

        setTbody(payload.data);
    }, [payload.data]);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = "";
            setSearchData([]);
        }
        const transactions = handleFilterCurrentMonth(monthSelected.value);

        if (transactions.length) {
            const valueOfMonth = handleReduceValueOfMonth();

            const response: Wallet[] = [
                {
                    id: Math.random().toString(),
                    date: subDays(new Date(`${monthSelected.value + 1}/01/2020`), 1),
                    cnpj: userAuthenticate.document,
                    nameCompany: userAuthenticate.name,
                    operation: 0,
                    value: valueOfMonth[monthSelected.value - 1],
                },
                ...transactions,
            ];

            return setTbody(response);
        }

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
        const documentFound = tbody.filter((item) => item.cnpj.includes(value));
        const namesFound = tbody.filter((item) => item.nameCompany.toLowerCase().includes(value.toLowerCase()));
        const [operationFound] = operations
            .filter((item) => item.name.toLowerCase().includes(value.toLowerCase()))
            .map((item) => item.value);
        const operationsFound = tbody.filter((item) => item.operation === operationFound);

        if (valueFound.length) return setSearchData(valueFound);
        else if (documentFound.length) return setSearchData(documentFound);
        else if (namesFound.length) return setSearchData(namesFound);
        else if (operationsFound.length) return setSearchData(operationsFound);

        return setSearchData([]);
    };

    const handleOrderByColumn = (column: string) => {
        if (lastColumn === column) {
            const response = tbody.map((item) => item).sort((a, b) => (a[column] < b[column] ? 1 : -1));

            setLastColum("");
            setTbody(response);
            return;
        }

        const response = tbody.map((item) => item).sort((a, b) => (a[column] > b[column] ? 1 : -1));

        setLastColum(column);
        setTbody(response);
    };

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
                            ref={inputRef}
                        />
                    </div>

                    <div className="col-xs-12 col-sm-4 align-self-start">
                        <button className="btn-azul align-left" onClick={handleSetTransfer}>
                            SAQUE
                        </button>
                    </div>
                </div>

                <Table
                    thead={header}
                    tbody={searchData.length !== 0 ? searchData : tbody}
                    handleOrderByColumn={handleOrderByColumn}
                />

                {transfer && (
                    <AlertWithdraw
                        isValidValue={isValidValue}
                        handleConfirm={handleSetTransfer}
                        handleCancel={handleSetTransfer}
                    />
                )}
            </div>
        </div>
    );
};

export default financialReportContainer(FinancialReport);
