import React, { useState } from "react";

import Table from "../../components/Table/TableNegociation";

interface Props {}

const header = [
    { text: "Idade da Dívida", title: "Idade da Dívida", reference: "yaerDebit" },
    { text: "Juros", title: "Juros", reference: "interest" },
    { text: "Desconto", title: "Desconto", reference: "discount" },
    { text: "Máximo de \n Parcelas", title: "Máximo de Parcelas", reference: "maxPortion" },
    { text: "Atenuador", title: "Atenuador", reference: "attenuator" },
    { text: "Multa", title: "Multa", reference: "trafficTicket" },
    { text: "Reajuste", title: "Reajuste", reference: "readjustment" },
    { text: "Editar e \n Simular", title: "Editar e Simular", reference: "" },
];

const RuleNegociation: React.FC<Props> = (props) => {
    const [tbody, setTbody] = useState(
        Array.from({ length: 60 }).map((_, index) => ({
            id: index,
            yaerDebit: "01/2020",
            interest: (Math.random() * 8).toFixed(1),
            discount: Math.floor(Math.random() * 12),
            maxPortion: Math.floor(Math.random() * 12),
            attenuator: "3,3",
            trafficTicket: "200,00",
            readjustment: Math.floor(Math.random() * 100),
        })),
    );

    const handleSetItemTbody = (key: number, value: string | number) => {};

    return (
        <div className="container">
            <div className="descmod cadastro d-flex justify-content-between">
                <div className="col-xs-12">
                    <b>Fique por dentro das negociações</b>
                    <h5>Selecione para ver mais detalhes</h5>
                </div>
            </div>

            <Table thead={header} tbody={tbody} />
        </div>
    );
};

export default RuleNegociation;
