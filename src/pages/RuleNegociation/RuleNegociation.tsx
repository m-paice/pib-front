import React from "react";

import Table from "../../components/Table/TableNegociation";

interface Props {}

const header = [
    { text: "Idade da Dívida", title: "Idade da Dívida", reference: "yaerDebit" },
    { text: "Juros", title: "Juros", reference: "interest" },
    { text: "Desconto", title: "Desconto", reference: "discount" },
    { text: "Máximo de \n Parcelas", title: "Máximo de Parcelas", reference: "maxPortion" },
    { text: "Atenuador", title: "Atenuador", reference: "attenuator" },
    { text: "Multa", title: "Multa", reference: "trafficTicket" },
    { text: "Assessoria", title: "Assessoria", reference: "advisory" },
    { text: "Reajuste", title: "Reajuste", reference: "readjustment" },
    { text: "Editar e \n Simular", title: "Editar e Simular", reference: "" },
];

const items = [
    {
        yaerDebit: "12/03/2020",
        interest: "1.3",
        discount: 10,
        maxPortion: 10,
        attenuator: "3,3",
        trafficTicket: "200,00",
        advisory: "1,5%",
        readjustment: "56",
    },

    {
        yaerDebit: "12/03/2020",
        interest: "1.5",
        discount: 11,
        maxPortion: 10,
        attenuator: "3,3",
        trafficTicket: "200,00",
        advisory: "1,5%",
        readjustment: "56",
    },

    {
        yaerDebit: "12/03/2020",
        interest: "2",
        discount: 10,
        maxPortion: 9,
        attenuator: "3,3",
        trafficTicket: "200,00",
        advisory: "1,5%",
        readjustment: "56",
    },

    {
        yaerDebit: "12/03/2020",
        interest: "1.7",
        discount: 9,
        maxPortion: 10,
        attenuator: "3,3",
        trafficTicket: "200,00",
        advisory: "1,5%",
        readjustment: "56",
    },

    {
        yaerDebit: "12/03/2020",
        interest: "1.5",
        discount: 9,
        maxPortion: 9,
        attenuator: "3,3",
        trafficTicket: "200,00",
        advisory: "1,5%",
        readjustment: "56",
    },

    {
        yaerDebit: "12/03/2020",
        interest: "1.5",
        discount: 11,
        maxPortion: 5,
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
