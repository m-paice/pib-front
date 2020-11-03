import React, { useEffect, useState } from "react";

import { debtorBaseContainer } from "./DebtorBaseContainer";

import { Debtor } from "../../store/modules/pj/debtor/types";

// components
import Table from "../../components/Table/TableDebtor";
import Select from "../../components/unconnected/Fields/Select";

const header = [
    { text: "Data de \n Registro", title: "Data de Registro", reference: "register" },
    { text: "CPF", title: "CPF", reference: "document" },
    { text: "Nome", title: "Nome", reference: "name" },
    { text: "Dívida", title: "Dívida", reference: "debt" },
    { text: "Negociado", title: "Negociado", reference: "negociation" },
    { text: "Recebido", title: "Recebido", reference: "receipt" },
    { text: "Atrasado", title: "Atrasado", reference: "late" },
    { text: "Situação", title: "Situação", reference: "situation" },
    { text: "Bloquear e \n Simular", title: "Bloquear e Simular", reference: "" },
];

const options = [
    { value: -1, label: "Todos" },
    { value: 1, label: "Em atraso" },
    { value: 2, label: "Em dia" },
    { value: 0, label: "Não negociada" },
    { value: 3, label: "Quitada" },
];

interface Props {
    payload: {
        data: Debtor[];
        actions: {
            handleLoadDebtors(): void;
        };
        handleFilterSituation(situation: number): Debtor[];
    };
}

const DebtorBase: React.FC<Props> = ({ payload }) => {
    const { data, actions, handleFilterSituation } = payload;
    const { handleLoadDebtors } = actions;

    const [tbody, setTbody] = useState<Debtor[]>(data);
    const [searchData, setSearchData] = useState<Debtor[]>([]);
    const [filteredSituation, setFilteredSituation] = useState({ value: -1, label: "Todos" });
    const [lastColumn, setLastColum] = useState("");

    useEffect(() => {
        handleLoadDebtors();
    }, []);

    useEffect(() => {
        const transactions = handleFilterSituation(filteredSituation.value);

        setTbody(transactions);
    }, [payload.data]);

    useEffect(() => {
        const debtors = handleFilterSituation(filteredSituation.value);
        setTbody(debtors);
    }, [filteredSituation]);

    const handleSetSituation = (situation: any) => {
        setFilteredSituation(situation);
    };

    const handleSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

        if (!value.length) return setSearchData([]);

        const debitFound = tbody.filter((item) => String(item.debt).includes(value));
        const negociationFound = tbody.filter((item) => String(item.negociation).includes(value));
        const documentFound = tbody.filter((item) => item.document.toLowerCase().includes(value.toLowerCase()));

        if (debitFound.length) return setSearchData(debitFound);
        else if (negociationFound.length) return setSearchData(negociationFound);
        else if (documentFound.length) return setSearchData(documentFound);

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
                <div className="listaBaseDev">
                    <div className="descmod cadastro">
                        <div className="row">
                            <div className="col-md-6">
                                <b>Fique por dentro das negociações</b>
                                <h5>Selecione para ver mais detalhes</h5>
                            </div>
                            <div className="col-md-3">
                                <Select options={options} value={filteredSituation} onChange={handleSetSituation} />
                            </div>
                            <div className="col-md-3">
                                <input
                                    placeholder="Pesquisar:"
                                    className="form-control inputAzul"
                                    onChange={handleSearchValue}
                                />
                            </div>
                        </div>
                    </div>

                    <Table
                        thead={header}
                        tbody={searchData.length !== 0 ? searchData : tbody}
                        handleOrderByColumn={handleOrderByColumn}
                    />
                </div>
            </div>
        </div>
    );
};

export default debtorBaseContainer(DebtorBase);
