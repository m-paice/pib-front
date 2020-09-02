import React from "react";

import Table from "../../components/Table/TableFinancial";

interface Props {}

const header = [
    { text: "Data", title: "Data" },
    { text: "CNPJ", title: "CNPJ" },
    { text: "Nome da Empresa", title: "Nome da Empresa" },
    { text: "Operação", title: "Operação" },
    { text: "Valor", title: "Valor" },
];

const items = [
    {
        date: "20/01/2020",
        cnpj: "00.000.000/0000-00",
        company: "Carmelita",
        operation: "Saque",
        value: "R$ 1.000,00",
    },

    {
        date: "20/01/2020",
        cnpj: "00.000.000/0000-00",
        company: "Carmelita",
        operation: "Saque",
        value: "R$ 1.000,00",
    },

    {
        date: "20/01/2020",
        cnpj: "00.000.000/0000-00",
        company: "Carmelita",
        operation: "Saque",
        value: "R$ 1.000,00",
    },

    {
        date: "20/01/2020",
        cnpj: "00.000.000/0000-00",
        company: "Carmelita",
        operation: "Saque",
        value: "R$ 1.000,00",
    },

    {
        date: "20/01/2020",
        cnpj: "00.000.000/0000-00",
        company: "Carmelita",
        operation: "Saque",
        value: "R$ 1.000,00",
    },

    {
        date: "20/01/2020",
        cnpj: "00.000.000/0000-00",
        company: "Carmelita",
        operation: "Saque",
        value: "R$ 1.000,00",
    },
];

const FinancialReport: React.FC<Props> = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-6 col-sm-6" style={{ fontSize: 35 }}>
                    <b>Seu Saldo: &nbsp;</b>R$ 8.000,00
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
                    <button className="btn-azul align-left">TRANSFERIR</button>
                </div>
            </div>

            <Table thead={header} tbody={items} />
        </div>
    );
};

export default FinancialReport;
