import React, { useState, useEffect } from "react";

import { ruleNegociationContainer } from "./RuleNegociationContainer";

import { Negociation } from "../../store/modules/pj/negociation/types";

// components
import Table from "../../components/Table/TableNegociation";
import UnableUser from "../../components/UnableUser";

interface Props {
    payload: {
        data: {
            userEnable: boolean;
            negociations: Negociation[];
        };
        actions: {
            loadRuleNegociations(): void;
        };
    };
}

const header = [
    { text: "Idade da \n Dívida", title: "Idade da Dívida", reference: "yaerDebit" },
    { text: "Juros", title: "Juros", reference: "interest" },
    { text: "Desconto", title: "Desconto", reference: "discount" },
    { text: "Máximo de \n Parcelas", title: "Máximo de Parcelas", reference: "maxPortion" },
    // { text: "Atenuador", title: "Atenuador", reference: "attenuator" }, // TODO: manter comentado
    { text: "Multa", title: "Multa", reference: "trafficTicket" },
    { text: "Reajuste", title: "Reajuste", reference: "readjustment" },
    { text: "Editar e \n Simular", title: "Editar e Simular", reference: "" },
];

const RuleNegociation: React.FC<Props> = ({ payload }) => {
    const { data, actions } = payload;

    const { userEnable, negociations } = data;
    const { loadRuleNegociations } = actions;

    const [tbody, setTbody] = useState<Negociation[]>(negociations);
    const [lastColumn, setLastColum] = useState("");

    useEffect(() => {
        loadRuleNegociations();
    }, []);

    useEffect(() => {
        setTbody(negociations);
    }, [payload.data]);

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
                {!userEnable && <UnableUser />}
                <div className="descmod cadastro d-flex justify-content-between">
                    <div className="col-xs-12">
                        <b>Fique por dentro das negociações</b>
                        <h5>Selecione para ver mais detalhes</h5>
                    </div>
                </div>

                <Table thead={header} tbody={tbody} handleOrderByColumn={handleOrderByColumn} />
            </div>
        </div>
    );
};

export default ruleNegociationContainer(RuleNegociation);
