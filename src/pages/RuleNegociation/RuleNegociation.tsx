import React from "react";

import Table from "../../components/Table/TableNegociation";

interface Props {}

const header = [
    { text: "Idade da Dívida", title: "Idade da Dívida" },
    { text: "Juros", title: "Juros" },
    { text: "Desconto", title: "Desconto" },
    { text: "Máximo de \n Parcelas", title: "Máximo de Parcelas" },
    { text: "Atenuador", title: "Atenuador" },
    { text: "Multa", title: "Multa" },
    { text: "Assessoria", title: "Assessoria" },
    { text: "Reajuste", title: "Reajuste" },
    { text: "Editar e \n Simular", title: "Editar e Simular" },
];

const items = [
    {
        yaerDebit: "12/03/2020",
        interest: "1.5",
        discount: "10%",
        maxPortion: "10",
        attenuator: "3,3",
        trafficTicket: "200,00",
        advisory: "1,5%",
        readjustment: "56",
    },

    {
        yaerDebit: "12/03/2020",
        interest: "1.5",
        discount: "10%",
        maxPortion: "10",
        attenuator: "3,3",
        trafficTicket: "200,00",
        advisory: "1,5%",
        readjustment: "56",
    },

    {
        yaerDebit: "12/03/2020",
        interest: "1.5",
        discount: "10%",
        maxPortion: "10",
        attenuator: "3,3",
        trafficTicket: "200,00",
        advisory: "1,5%",
        readjustment: "56",
    },

    {
        yaerDebit: "12/03/2020",
        interest: "1.5",
        discount: "10%",
        maxPortion: "10",
        attenuator: "3,3",
        trafficTicket: "200,00",
        advisory: "1,5%",
        readjustment: "56",
    },

    {
        yaerDebit: "12/03/2020",
        interest: "1.5",
        discount: "10%",
        maxPortion: "10",
        attenuator: "3,3",
        trafficTicket: "200,00",
        advisory: "1,5%",
        readjustment: "56",
    },

    {
        yaerDebit: "12/03/2020",
        interest: "1.5",
        discount: "10%",
        maxPortion: "10",
        attenuator: "3,3",
        trafficTicket: "200,00",
        advisory: "1,5%",
        readjustment: "56",
    },
];

const RuleNegociation: React.FC<Props> = (props) => {
    return (
        <div className="container">
            <div className="descmod cadastro d-flex justify-content-between">
                <div className="col-xs-9">
                    <b>Fique por dentro das negociações</b>
                    <h5>Selecione para ver mais detalhes</h5>
                </div>
                <div className="col-sm-3">
                    <input placeholder="Pesquisar:" className="form-control inputAzul" />
                </div>
            </div>

            <Table thead={header} tbody={items} />
        </div>
    );
};

export default RuleNegociation;
