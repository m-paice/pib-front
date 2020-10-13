import React, { useState, useEffect } from "react";

import { Debtor } from "../../../store/modules/pj/debtor/types";
import SweetAlert from "react-bootstrap-sweetalert";

// utils
import formatDate from "../../../utils/formatDate";

// components
import Simulator from "../../Simulator/Debtor";

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

interface DetailsItem {
    sitiacao: number;
    pagamento: number;
    parcelamento: number;
    vencimento: Date;
    valorParcela: number;
    valor: number;
    desconto: number;
    total: number;
}

const DetailsItem: React.FC<DetailsItem> = (props) => {
    const { sitiacao, pagamento, parcelamento, valorParcela, vencimento, valor, desconto, total } = props;

    const handleViewPayment = (payment: number) => {
        if (payment === 1) return "Cartão de crédito";
        if (payment === 2) return "Cartão de débito";
        if (payment === 3) return "Boleto";

        return "";
    };

    const handleViewSituation = (situation: number) => {
        if (situation === 1) return "EM ATRASO";
        if (situation === 2) return "EM DIA";
        if (situation === 3) return "NÃO NEGOCIADA";
        if (situation === 4) return "QUITADA";

        return "";
    };

    return (
        <div className="row pagt align-center">
            <div className="row pagt align-center">
                <div className="col-md text-nowrap">
                    Forma de Pagamento
                    <br />
                    <div className="lab lab2">
                        <strong>{handleViewPayment(pagamento || 0)}</strong>
                    </div>
                </div>
                <div className="col-md text-nowrap">
                    Parcelamento
                    <div className="lab lab2">
                        <strong>
                            {parcelamento} de {valorParcela.toFixed(2)}
                        </strong>
                    </div>
                </div>
                <div className="col-md text-nowrap">
                    Data de Vencimento
                    <div className="lab lab2">
                        <strong>{formatDate(vencimento)}</strong>
                    </div>
                </div>
                <div className="col-md text-nowrap">
                    Valor da Dívida
                    <div className="lab lab2">
                        <strong>{valor}</strong>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className="row justify-content-between">
                        <div className=" text-nowrap">
                            Desconto
                            <div className="lab lab2">
                                <strong>{desconto}</strong>
                            </div>
                        </div>
                        <div className=" text-nowrap">
                            Total
                            <div className="lab lab2">
                                <strong>{total}</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="full-width hidden-xs ">
                <div className="row nopadding ltab">
                    <div className="col-md text-nowrap lth">
                        <strong>Parcela </strong>
                        <div className="col-md mt-2">1</div>
                    </div>
                    <div className="col-md text-nowrap lth">
                        <strong>Vencimento </strong>
                        <div className="col-md mt-2">{formatDate(vencimento)}</div>
                    </div>
                    <div className="col-md text-nowrap lth">
                        <strong>Valor da Parcela</strong>
                        <div className="col-md mt-2">{valorParcela.toFixed(2)}</div>
                    </div>
                    <div className="col-md text-nowrap lth">
                        <strong>Data de Pagamento</strong>
                        <div className="col-md mt-2">29/05/2020</div>
                    </div>
                    <div className="col-md text-nowrap lth sit">
                        <strong>Situação</strong>
                        <div className=" col-md mt-2">
                            <span className="paga ">{handleViewSituation(sitiacao)}</span>
                        </div>
                    </div>
                    <div className="col-md lth">
                        <div className="col-md "></div>
                        <div className="col-md "></div>
                        <div className="col-md "></div>
                        <div className="col-md ">
                            {pagamento === 3 ? (
                                <a className="proxima haha text-nowrap">Gerar Boleto</a>
                            ) : (
                                <a className="proxima haha text-nowrap"> Cartão </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
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
        maxPartion,
        vencimento,
        handleSetId,
        idItemSelected,
    } = props;

    const [simulator, setSimulator] = useState(false);
    const [confirm, setConfirm] = useState(false);
    const [closed, setClosed] = useState(false);
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
                <Item>
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
                <Item>
                    <span style={styles}>{formatNumber(negociation)}</span>
                </Item>
                <Item>
                    <span style={styles}>{formatNumber(receipt)}</span>
                </Item>
                <Item separator={false}>
                    <span>{formatNumber(late)}</span>
                </Item>
                <Item separator={false} width={152}>
                    <span onClick={() => handleSetId(id)}>{handleViewSituation(situation)}</span>
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
                    <td className="txt-lista-regras" colSpan={9}>
                        <DetailsItem
                            sitiacao={situation}
                            pagamento={Math.ceil(Math.random() * 3)}
                            parcelamento={maxPartion}
                            valorParcela={negociation / maxPartion}
                            vencimento={vencimento}
                            valor={debit}
                            desconto={10}
                            total={debit - 10}
                        />
                    </td>
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
