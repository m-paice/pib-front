import React, { useState } from "react";

import Pencil from "../../../assets/imagens/pencil.png";
import Calculator from "../../../assets/imagens/calculator.png";
import CheckIcon from "../../../assets/imagens/check.svg";
import CancelIcon from "../../../assets/imagens/cancel.svg";

interface PropsItem {
    text: string | number;
    separator?: boolean;
}

const Item: React.FC<PropsItem> = ({ text, separator = true }) => {
    return (
        <td className="txt-lista-regras">
            {text}
            {separator && <div className="traco-v-table align-right"></div>}
        </td>
    );
};

interface PropsInputEdit {
    separator?: boolean;
    value: string | number;
    onChange?(): void;
}

const InputEdit: React.FC<PropsInputEdit> = (props) => {
    const { separator = true } = props;

    return (
        <td className="txt-lista-regras">
            <input {...props} style={{ maxWidth: 100, textAlign: "center" }} />
            {separator && <div className="traco-v-table align-right"></div>}
        </td>
    );
};

interface PropsActions {
    handleToggleEdit?(): void;
}

const Actions: React.FC<PropsActions> = ({ handleToggleEdit }) => {
    return (
        <td className="txt-lista-regras action">
            <div className="row d-flex justify-content-around">
                <div className="pointer" onClick={handleToggleEdit}>
                    <img src={Pencil} className="img-icon" />
                </div>
                <div>
                    <a>
                        <img src={Calculator} className="img-icon" />
                    </a>
                </div>
            </div>
        </td>
    );
};

interface PropsActionsEdit {
    handleToggleEdit(): void;
}

const ActionsEdit: React.FC<PropsActionsEdit> = ({ handleToggleEdit }) => {
    return (
        <td className="txt-lista-regras action">
            <div className="row d-flex justify-content-around">
                <img className="pointer" onClick={handleToggleEdit} src={CancelIcon} alt="cancel" />
                <img className="pointer" onClick={handleToggleEdit} src={CheckIcon} alt="check" />
            </div>
        </td>
    );
};

interface Props {
    id: number;
    yaerDebit: string;
    interest: string;
    discount: number;
    maxPortion: number;
    attenuator: string;
    trafficTicket: string;
    readjustment: number;
}

const TbodyItem: React.FC<Props> = ({
    id,
    yaerDebit,
    interest,
    discount,
    maxPortion,
    attenuator,
    trafficTicket,
    readjustment,
}) => {
    const [edit, setEdit] = useState(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    };

    if (edit) {
        return (
            <tr className="itemListaRegras">
                <Item text={yaerDebit} />
                <InputEdit value={interest} />
                <InputEdit value={`${discount}%`} />
                <InputEdit value={maxPortion} />
                <InputEdit value={attenuator} />
                <InputEdit value={trafficTicket} />
                <InputEdit value={readjustment} />
                <ActionsEdit handleToggleEdit={handleToggleEdit} />
            </tr>
        );
    }

    return (
        <tr className="itemListaRegras">
            <Item text={yaerDebit} />
            <Item text={interest} />
            <Item text={`${discount}%`} />
            <Item text={maxPortion} />
            <Item text={attenuator} />
            <Item text={trafficTicket} />
            <Item text={readjustment} />
            <Actions handleToggleEdit={handleToggleEdit} />
        </tr>
    );
};

export default TbodyItem;
