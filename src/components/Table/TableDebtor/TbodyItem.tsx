import React, { useState, useEffect } from "react";

import { differenceInCalendarMonths } from "date-fns";
import SweetAlert from "react-bootstrap-sweetalert";

// types
import { Debtor, Negociation } from "../../../store/modules/pj/debtor/types";

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
    const { id, consumidor, negociacao, inclusao, handleSetId, idItemSelected } = props;

    const [simulator, setSimulator] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [closed, setClosed] = useState(true);
    const [messageNegociation, setMessageNebociation] = useState(false);
    const [amountMonth, setAmountMonth] = useState(0);

    const handleDayNumber = (date: Date) => Number(String(formatDate(date)).split("/")[0]);

    useEffect(() => {
        const currentMonth = new Date();
        const registerMonth = new Date(inclusao);

        const amountMonthNumber = differenceInCalendarMonths(currentMonth, registerMonth);

        if (handleDayNumber(registerMonth) > handleDayNumber(currentMonth)) {
            setAmountMonth(amountMonthNumber - 1);
        } else setAmountMonth(amountMonthNumber);
    }, []);

    const handleToggleSimulator = () => {
        setSimulator(!simulator);
    };

    const handleViewSituation = (situation: string | null) => {
        if (!situation) return <a className="btneg blue none-border-radius blue-p pointer">NÃO NEGOCIADA</a>;

        if (situation === "atrasado") return <a className="btneg red none-border-radius pointer">EM ATRASO</a>;
        if (situation === "em dia") return <a className="btneg green2 none-border-radius pointer">EM DIA</a>;
        if (situation === "quitada") return <a className="btneg green none-border-radius pointer">QUITADA</a>;

        return "";
    };

    const formatNumber = (value = 0) =>
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

    const handleToggleMessageNegociation = () => {
        setMessageNebociation(!messageNegociation);
    };

    return (
        <>
            <tr className="itemListaRegras">
                <Item width={100}>
                    <span style={styles}>{formatDate(new Date(props.inclusao))}</span>
                </Item>
                <Item width={150}>
                    <span style={styles}>{props.consumidor.cpf}</span>
                </Item>
                <Item width={180}>
                    <span style={styles}>{props.consumidor.usuario.nome}</span>
                </Item>
                <Item width={150}>
                    <span style={styles}>{formatNumber(props.valor)}</span>
                </Item>
                <Item width={150}>
                    <span style={styles}>{formatNumber(props.negociacao ? props.negociacao.negociado : 0)}</span>
                </Item>
                <Item width={150}>
                    <span style={styles}>{formatNumber(props.negociacao ? props.negociacao.recebido : 0)}</span>
                </Item>
                <Item width={150}>
                    <span style={styles}>{formatNumber(props.negociacao ? props.negociacao.atrasado : 0)}</span>
                </Item>
                <Item separator={false} width={150}>
                    <span onClick={() => props.negociacao && handleSetId(id)}>
                        {props.negociacao ? handleViewSituation(props.negociacao.situacao) : handleViewSituation(null)}
                    </span>
                </Item>

                <Actions
                    show={props.negociacao ? true : false}
                    closed={closed}
                    handleToggleSimulator={handleToggleSimulator}
                    handleToggleConfirm={handleToggleConfirm}
                />
            </tr>

            {/* renderizacoes a partir das acoes do usuario */}

            {props.negociacao && idItemSelected === id && (
                <tr className="itemListaRegras">
                    <td></td>
                    <td className="txt-lista-regras" colSpan={7}>
                        <DetailsItem {...props.negociacao} />
                    </td>
                    <td></td>
                </tr>
            )}
        </>
    );
};

export default TbodyItem;
