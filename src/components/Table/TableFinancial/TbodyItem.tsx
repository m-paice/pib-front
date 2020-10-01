import React from "react";

import formatDate from "../../../utils/formatDate";

import { Wallet } from "../../../store/modules/pj/wallet/types";

const styles: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7px",
};

const stylesAnyLessIcon: React.CSSProperties = {
    fontSize: 20,
    color: "red",
    fontWeight: "bold",
    marginLeft: 5,
};

const stylesPlusIcon: React.CSSProperties = {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
    marginLeft: 5,
};

interface PropsItem {
    index: number;
    operation: number;
    separator?: boolean;
}

const Item: React.FC<PropsItem> = ({ children, index, operation, separator = true }) => {
    const changeColor = operation === 3; // accredite rate

    const isPar = index % 2 === 0;

    return (
        <td
            className={`txt-lista-regras ${changeColor ? "tdAccredite" : ""} ${isPar ? "tdbgcolor" : ""}`}
            style={{ position: "relative" }}
        >
            {children}
            {separator ? (
                <div className="traco-v-table align-right"></div>
            ) : (
                <div className="traco-v-table align-right" style={{ border: "none" }}></div>
            )}
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
                <>
                    {text} <span style={stylesAnyLessIcon}>-</span>{" "}
                </>
            );
        }

        return (
            <span>
                {text} <span style={stylesPlusIcon}>+</span>
            </span>
        );
    };

    return (
        <tr className="itemListaRegras">
            <Item index={index} operation={operation}>
                <span style={styles}>{formatDate(date)}</span>
            </Item>
            <Item index={index} operation={operation}>
                <span style={styles}>{cnpj}</span>
            </Item>
            <Item index={index} operation={operation}>
                <span style={styles}>{nameCompany}</span>
            </Item>
            <Item index={index} operation={operation}>
                <span style={styles}>{handleViewType()}</span>
            </Item>
            <Item index={index} operation={operation} separator={false}>
                <span style={{ ...styles, margin: 0 }}>{handleViewValue()}</span>
            </Item>
        </tr>
    );
};

export default TbodyItem;
