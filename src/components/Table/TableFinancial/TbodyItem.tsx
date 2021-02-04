import React from "react";

import formatDate from "../../../utils/formatDate";

import { Wallet } from "../../../store/modules/pj/wallet/types";

import monthNames from "../../../utils/monthNames";

const styles: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "7px",
};

const stylesPositive: React.CSSProperties = {
    color: "green",
};

const stylesNegative: React.CSSProperties = {
    color: "red",
};

interface PropsItem {
    index: number;
    operation: string;
    separator?: boolean;
    width?: string | number;
}

const Item: React.FC<PropsItem> = ({ children, index, operation, separator = true, width }) => {
    const changeColor = operation === "saque"; // accredite rate

    const isPar = index % 2 === 0;

    return (
        <td
            className={`txt-lista-regras ${changeColor ? "tdAccredite" : ""} ${isPar ? "tdbgcolor" : ""}`}
            style={{ position: "relative", width }}
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

const TbodyItem: React.FC<Props> = ({ index, createdAt, lojistaId, documento, nome, operacao, valor, lojista }) => {
    const lateMonth = new Date(createdAt).getMonth();

    const handleViewType = () => {
        if (operacao === "saldo") return `Saldo ${monthNames[lateMonth]}`;
        if (operacao === "recebimento") return "Recebimento";
        if (operacao === "saque") return "Saque";
        if (operacao === "comissao") return "Comissão";
        if (operacao === "taxa") return "Taxa de transferência";

        return "";
    };

    const handleViewValue = () => {
        const text = valor.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

        if (operacao === "saldo") {
            return <span style={stylesPositive}>{text}</span>;
        }

        if (operacao === "recebimento") {
            return <span style={stylesPositive}>{text}</span>;
        }

        return <span style={stylesNegative}>-{text}</span>;
    };

    return (
        <tr className="itemListaRegras">
            <Item index={index} operation={operacao}>
                <span style={styles}>{formatDate(new Date(createdAt))}</span>
            </Item>
            <Item index={index} operation={operacao} width={150}>
                <span style={styles}>{documento}</span>
            </Item>
            <Item index={index} operation={operacao}>
                <span style={styles}>{nome}</span>
            </Item>
            <Item index={index} operation={operacao} width={150}>
                <span style={styles}>{handleViewType()}</span>
            </Item>
            <Item index={index} operation={operacao} separator={false}>
                <span style={{ ...styles, marginTop: 7 }}>{handleViewValue()}</span>
            </Item>
        </tr>
    );
};

export default TbodyItem;
