import React, { useState, useEffect } from "react";

import { Debtor } from "../../../store/modules/pj/debtor/types";
import SweetAlert from "react-bootstrap-sweetalert";

// utils
import formatDate from "../../../utils/formatDate";

// components
import Simulator from "../../Simulator/Debtor";
import DetailsItem from "./DetailsItem";

// assets
import Lock from "../../../assets/imagens/lock.png";
import Unlock from "../../../assets/imagens/unlock.png";
import Calculator from "../../../assets/imagens/calculator.png";

const styles: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
};

interface PropsItem {
    separator?: boolean;
    width?: number | string;
}

const Item: React.FC<PropsItem> = ({ children, separator = true, width }) => {
    return (
        <td className="txt-lista-regras" style={{ position: "relative", width }}>
            {children}
            {separator && <div className="traco-v-table align-right"></div>}
        </td>
    );
};

interface PropsActions {
    show: boolean;
    closed: boolean;
    handleToggleSimulator?(): void;
    handleToggleConfirm(): void;
}

const Actions: React.FC<PropsActions> = ({ show, closed, handleToggleSimulator, handleToggleConfirm }) => {
    const handleToggleImage = () => {
        handleToggleConfirm();
    };

    if (!show)
        return (
            <td className="txt-lista-regras action" style={{ width: 100 }}>
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
        <td className="txt-lista-regras action" style={{ width: 100 }}>
            <div className="d-flex justify-content-around">
                <div className="pointer">
                    <img src={closed ? Unlock : Lock} className="img-icon" onClick={handleToggleImage} />
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

interface Props extends Debtor {
    handleSetId(id: string): void;
    idItemSelected: string;
}

const TbodyItem: React.FC<Props> = (props) => {
    const {
        id,
        dateRegister,
        document,
        name,
        debit,
        negociation,
        receipt,
        late,
        situation,
        portion,
        discount,
        handleSetId,
        idItemSelected,
    } = props;

    const [simulator, setSimulator] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [closed, setClosed] = useState(true);
    const [amountMonth, setAmountMonth] = useState(0);

    useEffect(() => {
        const currentMonth = new Date().getMonth();
        const registerMonth = new Date(dateRegister).getMonth();

        const amountMonth = currentMonth - registerMonth;

        setAmountMonth(amountMonth);
    }, []);

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

    const handleToggleConfirm = () => {
        setConfirm(!confirm);
    };

    const handleConfirm = () => {
        setConfirm(false);
        setClosed(!closed);
    };
    const handleCancel = () => {
        setConfirm(false);
    };

    return (
        <>
            <tr className="itemListaRegras">
                <Item width={100}>
                    <span style={styles}>{formatDate(dateRegister)}</span>
                </Item>
                <Item width={120}>
                    <span style={styles}>{document}</span>
                </Item>
                <Item width={150}>
                    <span style={styles}>{name}</span>
                </Item>
                <Item width={80}>
                    <span style={styles}>{formatNumber(debit)}</span>
                </Item>
                {situation !== 3 ? (
                    <>
                        {" "}
                        <Item>
                            <span style={styles}>{formatNumber(negociation)}</span>
                        </Item>
                        <Item>
                            <span style={styles}>{formatNumber(receipt)}</span>
                        </Item>
                        <Item separator={false}>
                            <span>{situation !== 1 ? formatNumber(0) : formatNumber(late)}</span>
                        </Item>
                    </>
                ) : (
                    <>
                        <Item>
                            <span style={styles}>{formatNumber(0)}</span>
                        </Item>
                        <Item>
                            <span style={styles}>{formatNumber(0)}</span>
                        </Item>
                        <Item separator={false}>
                            <span>{formatNumber(0)}</span>
                        </Item>{" "}
                    </>
                )}
                <Item separator={false} width={152}>
                    {situation !== 3 ? (
                        <span onClick={() => handleSetId(id)}>{handleViewSituation(situation)}</span>
                    ) : (
                        <span>{handleViewSituation(situation)}</span>
                    )}
                </Item>
                <Actions
                    show={situation === 3}
                    closed={closed}
                    handleToggleSimulator={handleToggleSimulator}
                    handleToggleConfirm={handleToggleConfirm}
                />
            </tr>
            {idItemSelected === id && (
                <tr className="itemListaRegras">
                    <td></td>
                    <td className="txt-lista-regras" colSpan={7}>
                        <DetailsItem
                            {...props}
                            total={debit - discount}
                            value={debit}
                            valuePortion={(debit - discount) / portion}
                        />
                    </td>
                    <td></td>
                </tr>
            )}
            {simulator && (
                <Simulator isOpen={simulator} onClose={handleToggleSimulator} monthForRule={amountMonth} {...props} />
            )}
            {confirm && (
                <SweetAlert
                    title={
                        <div className="txt-sweet-alert">
                            Tem certeza que deseja <br /> {closed ? "bloquear" : "desbloquear"} negociação ?
                        </div>
                    }
                    style={{
                        background: "#14647b",
                        color: "#fff !important",
                    }}
                    showCancel
                    confirmBtnCssClass="btn-sweet-alert"
                    cancelBtnCssClass="btn-sweet-alert"
                    confirmBtnText="Confirmar"
                    cancelBtnText="Cancelar"
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}
        </>
    );
};

export default TbodyItem;
