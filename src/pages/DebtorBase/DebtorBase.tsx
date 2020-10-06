import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";

import { debtorBaseContainer } from "./DebtorBaseContainer";

import { Debtor } from "../../store/modules/pj/debtor/types";

// actions
import { actions as actionsDebtors } from "../../store/modules/pj/debtor/actions";

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
    { value: 0, label: "Todos" },
    { value: 1, label: "Em atraso" },
    { value: 2, label: "Em dia" },
    { value: 3, label: "Não negociada" },
    { value: 4, label: "Quitada" },
];

interface Props {
    payload: {
        data: Debtor[];
        handleFilterSituation(situation: number): Debtor[];
    };
}

const DebtorBase: React.FC<Props> = ({ payload }) => {
    const { data, handleFilterSituation } = payload;

    const dispatch = useDispatch();

    const [tbody, setTbody] = useState<Debtor[]>(data);
    const [filteredSituation, setFilteredSituation] = useState({ value: 0, label: "Todos" });

    useEffect(() => {
        dispatch(actionsDebtors.loadNegociation());
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
                                <input placeholder="Pesquisar:" className="form-control inputAzul" />
                            </div>
                        </div>
                    </div>

                    <Table thead={header} tbody={tbody} />
                </div>
            </div>
        </div>
    );
};

export default debtorBaseContainer(DebtorBase);
