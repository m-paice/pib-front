import React from "react";

import formatDate from "../../../utils/formatDate";

import { Wallet } from "../../../store/modules/pj/wallet/types";

interface PropsItem {
    index: number;
    text: string | Date | number | JSX.Element;
    operation: number;
    separator?: boolean;
}

const Item: React.FC<PropsItem> = ({ index, text, operation, separator = true }) => {
    const changeColor = operation === 3; // accredite rate

    const isPar = index % 2 === 0;

    return (
        <td className={`txt-lista-regras ${changeColor ? "tdAccredite" : ""} ${isPar ? "tdbgcolor" : ""}`}>
            <span> {text} </span>
            {separator && <div className="traco-v-table align-right"></div>}
        </td>
    );
};

interface Props extends Wallet {
    index: number;
}

const TbodyItem: React.FC<Props> = ({ index, date, cnpj, nameCompany, operation, value }) => {
    const handleViewType = () => {
        if (operation === 1) return "Saque";
        if (operation === 2) return "Recebimento";
        if (operation === 3) return "Comissão";
        if (operation === 4) return "Taxa de transferência";

        return "";
    };

    const handleViewValue = () => {
        const text = value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

        if (operation !== 2) {
            return (
                <span>
                    {text} <span style={{ fontSize: 20, color: "red" }}>&#8595;</span>
                </span>
            );
        }

        return (
            <span>
                {text} <span style={{ fontSize: 20, color: "green" }}>&#8593;</span>
            </span>
        );
    };

    return (
        <tr className="itemListaRegras">
            <Item index={index} operation={operation} text={formatDate(date)} />
            <Item index={index} operation={operation} text={cnpj} />
            <Item index={index} operation={operation} text={nameCompany} />
            <Item index={index} operation={operation} text={handleViewType()} />
            <Item index={index} operation={operation} text={handleViewValue()} separator={false} />
        </tr>
    );
};

export default TbodyItem;
