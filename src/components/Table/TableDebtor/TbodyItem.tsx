import React, { useState } from "react";

import { Debtor } from "../../../store/modules/pj/debtor/types";

// utils
import formatDate from "../../../utils/formatDate";

// components
import Simulator from "../../Simulator/Debtor";

// assets
import Lock from "../../../assets/imagens/lock.png";
import Unlock from "../../../assets/imagens/unlock.png";
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
    handleToggleSimulator?(): void;
    show: boolean;
}

const Actions: React.FC<PropsActions> = ({ handleToggleSimulator, show }) => {
    const [image, setImage] = useState(false);

    const handleToggleImage = () => {
        setImage(!image);
    };

    if (!show)
        return (
            <td className="txt-lista-regras action">
                <div className="d-flex justify-content-around">
                    <div className="pointer">
                        <img src={Lock} className="img-icon" style={{ filter: "contrast(1%)" }} />
                    </div>
                    <div>
                        <a>
                            <img src={Calculator} className="img-icon" style={{ filter: "contrast(1%)" }} />
                        </a>
                    </div>
                </div>
            </td>
        );

    return (
        <td className="txt-lista-regras action">
            <div className="d-flex justify-content-around">
                <div className="pointer">
                    <img src={image ? Unlock : Lock} className="img-icon" onClick={handleToggleImage} />
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
    const { id, dateRegister, document, name, debit, negociation, receipt, late, situation } = props;

    const [simulator, setSimulator] = useState(false);

    const handleToggleSimulator = () => {
        setSimulator(!simulator);
    };

    const handleViewSituation = (situation: number) => {
        if (situation === 1) return <a className="btneg red none-border-radius pointer">EM ATRASO</a>;
        if (situation === 2) return <a className="btneg green2 none-border-radius pointer">EM DIA</a>;
        if (situation === 3) return <a className="btneg blue none-border-radius blue-p pointer">NÃO NEGOCIADA</a>;
        if (situation === 4) return <a className="btneg green none-border-radius pointer">QUITADA</a>;

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
                <span style={styles}>{formatDate(dateRegister)}</span>
            </Item>
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
            <Actions handleToggleSimulator={handleToggleSimulator} show={situation === 3} />

            {simulator && <Simulator isOpen={simulator} onClose={handleToggleSimulator} {...props} />}
        </tr>
    );
};

export default TbodyItem;
