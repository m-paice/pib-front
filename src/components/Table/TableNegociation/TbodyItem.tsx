import React, { useState } from "react";

import { Tooltip } from "reactstrap";
import { useDispatch } from "react-redux";

import { Negociation } from "../../../store/modules/pj/negociation/types";

// actions
import { actions as actionsNegociation } from "../../../store/modules/pj/negociation/actions";

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
    errors?: boolean;
}

const Item: React.FC<PropsItem> = ({ text, separator = true, errors }) => {
    return (
        <td className={`txt-lista-regras ${errors ? "tdErrors" : ""}`}>
            {text}
            {separator && <div className="traco-v-table align-right"></div>}
        </td>
    );
};

interface PropsInputEdit {
    separator?: boolean;
    name: string;
    initialValue: string | number;
    handleSetValues(key: string, value: string): void;
    errors: boolean;
}

const InputEdit: React.FC<PropsInputEdit> = (props) => {
    const { separator = true, name, initialValue, handleSetValues, errors } = props;

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleSetValues(name, event.target.value);
    };

    return (
        <td className={`txt-lista-regras ${errors ? "tdErrors" : ""}`}>
            <input value={initialValue} onChange={handleChangeValue} style={{ maxWidth: 100, textAlign: "center" }} />
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
    handleSave(): boolean;
    errors?: boolean;
}

interface State {
    save: boolean;
    cancel: boolean;
}

const ActionsEdit: React.FC<PropsActionsEdit> = ({ handleToggleEdit, handleSave, errors }) => {
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

    const handleSaveClick = () => {
        const response = handleSave();

        if (response) handleToggleEdit();
    };

    return (
        <td className={`txt-lista-regras action ${errors ? "tdErrors" : ""}`}>
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
                <img id="save" className="pointer" onClick={handleSaveClick} src={CheckIcon} alt="check" />
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

    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);
    const [simulator, setSimulator] = useState(false);
    const [errors, setErrors] = useState(false);

    const [values, setValues] = useState<Negociation>({
        id,
        yaerDebit,
        interest,
        discount,
        maxPortion,
        attenuator,
        trafficTicket,
        readjustment,
    });

    /** toggle edit and reset values */
    const handleToggleEdit = () => {
        setEdit(!edit);
        setValues({ id, yaerDebit, interest, discount, maxPortion, attenuator, trafficTicket, readjustment });
    };

    const handleToggleSimulator = () => {
        setSimulator(!simulator);
    };

    const handleFormatYaerDebit = (text: string): string => (text === "1" ? `${text} mês` : `${text} meses`);

    /** set value */
    const handleSetValues = (key: string, value: string | number) => {
        setValues((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    /** check validations and edit */
    const handleSave = () => {
        if (Number(values.trafficTicket) > 2) {
            setErrors(true);
            return false;
        }

        dispatch(actionsNegociation.updateNegociation(values));
        setErrors(false);
        return true;
    };

    if (edit) {
        return (
            <>
                <tr className="itemListaRegras">
                    <Item text={handleFormatYaerDebit(yaerDebit)} errors={errors} />
                    <InputEdit
                        name="interest"
                        initialValue={values.interest}
                        handleSetValues={handleSetValues}
                        errors={errors}
                    />
                    <InputEdit
                        name="discount"
                        initialValue={values.discount}
                        handleSetValues={handleSetValues}
                        errors={errors}
                    />
                    <InputEdit
                        name="maxPortion"
                        initialValue={values.maxPortion}
                        handleSetValues={handleSetValues}
                        errors={errors}
                    />
                    <InputEdit
                        name="attenuator"
                        initialValue={values.attenuator}
                        handleSetValues={handleSetValues}
                        errors={errors}
                    />
                    <InputEdit
                        name="trafficTicket"
                        initialValue={values.trafficTicket}
                        handleSetValues={handleSetValues}
                        errors={errors}
                    />
                    <InputEdit
                        name="readjustment"
                        initialValue={values.readjustment}
                        handleSetValues={handleSetValues}
                        errors={errors}
                    />
                    <ActionsEdit handleToggleEdit={handleToggleEdit} handleSave={handleSave} errors={errors} />
                </tr>

                {errors && (
                    <tr>
                        <td style={{ border: "none", textAlign: "center", color: "red" }} colSpan={8}>
                            Opa, valor de multa deve ser no máximo 2%
                        </td>
                    </tr>
                )}
            </>
        );
    }

    return (
        <tr className="itemListaRegras">
            <Item text={handleFormatYaerDebit(yaerDebit)} />
            <Item text={`${Number(interest).toFixed(1)}%`} />
            <Item text={`${Number(discount).toFixed(1)}%`} />
            <Item text={maxPortion} />
            <Item text={`${Number(attenuator).toFixed(1)}%`} />
            <Item text={`${Number(trafficTicket).toFixed(1)}%`} />
            <Item text={`${Number(readjustment).toFixed(1)}%`} />
            <Actions handleToggleEdit={handleToggleEdit} handleToggleSimulator={handleToggleSimulator} />

            {simulator && (
                <Simulator
                    {...props}
                    isOpen={simulator}
                    onClose={handleToggleSimulator}
                    yaerDebit={handleFormatYaerDebit(yaerDebit)}
                />
            )}
        </tr>
    );
};

export default TbodyItem;
