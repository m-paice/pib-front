import React from "react";

import { Debtor } from "../../../store/modules/pj/debtor/types";

// assets
import Lock from "../../../assets/imagens/lock.png";
import Calculator from "../../../assets/imagens/calculator.png";

const styles: React.CSSProperties = {
    marginTop: "7px",
};

interface PropsItem {
    separator?: boolean;
}

const Item: React.FC<PropsItem> = ({ children, separator = true }) => {
    return (
        <td className="txt-lista-regras" style={{ position: "relative" }}>
            {children}
            {separator && <div className="traco-v-table align-right"></div>}
        </td>
    );
};

interface PropsActions {
    handleToggleEdit?(): void;
    handleToggleSimulator?(): void;
}

const Actions: React.FC<PropsActions> = ({ handleToggleEdit, handleToggleSimulator }) => {
    return (
        <td className="txt-lista-regras action">
            <div className="d-flex justify-content-around">
                <div className="pointer" onClick={handleToggleEdit}>
                    <img src={Lock} className="img-icon" />
                </div>
                <div onClick={handleToggleSimulator}>
                    <a>
                        <img src={Calculator} className="img-icon" />
                    </a>
                </div>
            </div>
        </td>
    );
};

type Props = Debtor;

const TbodyItem: React.FC<Props> = (props) => {
    const { id, document, name, debit, negociation, receipt, late, situation } = props;

    const handleToggleEdit = () => {};
    const handleToggleSimulator = () => {};

    const handleViewSituation = (situation: number) => {
        if (situation === 1) return <a className="btneg red none-border-radius pointer">EM ATRASO</a>;
        if (situation === 2) return <a className="btneg blue none-border-radius blue-p pointer">DISPONÍVEL</a>;
        if (situation === 3) return <a className="btneg green2 none-border-radius pointer">QUITADA</a>;

        return "";
    };

    const formatNumber = (value: number) =>
        value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });

    return (
        <tr className="itemListaRegras">
            <Item>
                <span style={styles}>{document}</span>
            </Item>
            <Item>
                <span style={styles}>{name}</span>
            </Item>
            <Item>
                <span style={styles}>{formatNumber(debit)}</span>
            </Item>
            <Item>
                <span style={styles}>{formatNumber(negociation)}</span>
            </Item>
            <Item>
                <span style={styles}>{formatNumber(receipt)}</span>
            </Item>
            <Item separator={false}>
                <span style={styles}>{formatNumber(late)}</span>
            </Item>
            <Item separator={false}>
                <span style={styles}>{handleViewSituation(situation)}</span>
            </Item>
            <Actions handleToggleEdit={handleToggleEdit} handleToggleSimulator={handleToggleSimulator} />
        </tr>
    );
};

export default TbodyItem;
