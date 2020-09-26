import React, { useState } from "react";

import { Tooltip } from "reactstrap";

import { Negociation } from "../../../store/modules/pj/negociation/types";

// components
import Simulator from "../../Simulator";

// assets
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
    handleToggleSimulator?(): void;
}

const Actions: React.FC<PropsActions> = ({ handleToggleEdit, handleToggleSimulator }) => {
    return (
        <td className="txt-lista-regras action">
            <div className="d-flex justify-content-around">
                <div className="pointer" onClick={handleToggleEdit}>
                    <img src={Pencil} className="img-icon" />
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

interface PropsActionsEdit {
    handleToggleEdit(): void;
}

interface State {
    save: boolean;
    cancel: boolean;
}

const ActionsEdit: React.FC<PropsActionsEdit> = ({ handleToggleEdit }) => {
    const [state, setState] = useState<State>({
        save: false,
        cancel: false,
    });

    const handleSetState = (key: string, value: boolean) => {
        setState((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    return (
        <td className="txt-lista-regras action">
            <div className="d-flex justify-content-around">
                <img id="cancel" className="pointer" onClick={handleToggleEdit} src={CancelIcon} alt="cancel" />
                <Tooltip
                    placement="top"
                    isOpen={state.cancel}
                    target="cancel"
                    toggle={() => handleSetState("cancel", !state.cancel)}
                >
                    cancelar operação
                </Tooltip>
                <img id="save" className="pointer" onClick={handleToggleEdit} src={CheckIcon} alt="check" />
                <Tooltip
                    placement="top"
                    isOpen={state.save}
                    target="save"
                    toggle={() => handleSetState("save", !state.save)}
                >
                    salvar operação
                </Tooltip>
            </div>
        </td>
    );
};

type Props = Negociation;

const TbodyItem: React.FC<Props> = (props) => {
    const { id, yaerDebit, interest, discount, maxPortion, attenuator, trafficTicket, readjustment } = props;

    const [edit, setEdit] = useState(false);
    const [simulator, setSimulator] = useState(false);

    const handleToggleEdit = () => {
        setEdit(!edit);
    };

    const handleToggleSimulator = () => {
        setSimulator(!simulator);
    };

    if (edit) {
        return (
            <tr className="itemListaRegras">
                <Item text={yaerDebit === "1" ? `${yaerDebit} mês` : `${yaerDebit} meses`} />
                <InputEdit value={interest} />
                <InputEdit value={discount} />
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
            <Item text={yaerDebit === "1" ? `${yaerDebit} mês` : `${yaerDebit} meses`} />
            <Item text={`${interest}%`} />
            <Item text={`${discount}%`} />
            <Item text={maxPortion} />
            <Item text={`${attenuator}%`} />
            <Item text={`${trafficTicket}%`} />
            <Item text={`${readjustment}%`} />
            <Actions handleToggleEdit={handleToggleEdit} handleToggleSimulator={handleToggleSimulator} />

            {simulator && <Simulator isOpen={simulator} onClose={handleToggleSimulator} {...props} />}
        </tr>
    );
};

export default TbodyItem;
