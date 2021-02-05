import React, { useState } from "react";

import { Tooltip } from "reactstrap";
import { useDispatch } from "react-redux";
import SweetAlert from "react-bootstrap-sweetalert";

import { Negociation } from "../../../store/modules/pj/negociation/types";

// actions
import { actions as actionsNegociation } from "../../../store/modules/pj/negociation/actions";

// components
import Simulator from "../../Simulator/Negociation";

// assets
import Pencil from "../../../assets/imagens/pencil.png";
import Calculator from "../../../assets/imagens/calculator.png";
import CheckIcon from "../../../assets/imagens/check.svg";
import CancelIcon from "../../../assets/imagens/cancel.svg";

interface PropsItem {
    text: string | number | undefined;
    separator?: boolean;
    errors?: boolean;
}

const styles: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
};

const Item: React.FC<PropsItem> = ({ text, separator = true, errors }) => {
    return (
        <td className={`txt-lista-regras ${errors ? "tdErrors" : ""}`} style={{ position: "relative" }}>
            <span style={styles}>{text}</span>
            {separator && <div className="traco-v-table align-right"></div>}
        </td>
    );
};

interface Options {
    name: string;
    value: string | number;
}

interface PropsInputEdit {
    separator?: boolean;
    name: string;
    initialValue: string | number;
    handleSetValues(key: string, value: string): void;
    options?: Options[];
    errors: boolean;
}

const InputEdit: React.FC<PropsInputEdit> = (props) => {
    const { separator = true, name, initialValue, handleSetValues, options, errors } = props;

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const value = event.target.value.replace(/(\.|\,)/g, "");
        handleSetValues(name, value);
    };

    if (options && options.length)
        return (
            <td className={`txt-lista-regras ${errors ? "tdErrors" : ""}`}>
                <select
                    name={name}
                    onChange={handleChangeValue}
                    style={{ minWidth: 85, height: 26, textAlign: "center", color: "#000" }}
                >
                    <option selected>{initialValue}</option>
                    {options.map((item, index) => (
                        <option key={index} value={item.value} style={{ color: "#000" }}>
                            {item.name}
                        </option>
                    ))}
                </select>
                {separator && <div className="traco-v-table align-right"></div>}
            </td>
        );

    return (
        <td className={`txt-lista-regras ${errors ? "tdErrors" : ""}`}>
            <input
                type="number"
                value={initialValue}
                onChange={handleChangeValue}
                style={{ maxWidth: 100, height: 26, textAlign: "center" }}
            />
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
    const [save, setSave] = useState(false);
    const [cancel, setCancel] = useState(false);

    const handleSetSave = () => setSave(!save);
    const handleSetCancel = () => setCancel(!cancel);

    const handleSaveClick = () => {
        const response = handleSave();

        if (response) handleToggleEdit();
    };

    return (
        <td className={`txt-lista-regras action ${errors ? "tdErrors" : ""}`}>
            <div className="d-flex justify-content-around">
                <img id="cancel" className="pointer" onClick={handleToggleEdit} src={CancelIcon} alt="cancel" />
                <Tooltip placement="top" isOpen={cancel} target="cancel" toggle={handleSetCancel}>
                    cancelar operação
                </Tooltip>
                <img id="save" className="pointer" onClick={handleSaveClick} src={CheckIcon} alt="check" />
                <Tooltip placement="top" isOpen={save} target="save" toggle={handleSetSave}>
                    salvar operação
                </Tooltip>
            </div>
        </td>
    );
};

type Props = Negociation;

interface ErrorsState {
    [key: string]: {
        value: string;
        error: boolean;
    };
}

const TbodyItem: React.FC<Props> = (props) => {
    const { id, idadeDivida, juros, desconto, maximoParcela, atenuador, assessoria, reajuste, multa } = props;

    const dispatch = useDispatch();

    const [edit, setEdit] = useState(false);
    const [simulator, setSimulator] = useState(false);
    const [confirmEdit, setConfirmEdit] = useState(false);
    const [errors, setErrors] = useState<ErrorsState>({} as ErrorsState);

    const [values, setValues] = useState<Negociation>({} as Negociation);

    /** toggle edit and reset values */
    const handleToggleEdit = () => {
        setEdit(!edit);
        setErrors({});
        setValues({ id, idadeDivida, juros, desconto, maximoParcela, atenuador, assessoria, reajuste, multa });
    };

    const handleToggleSimulator = () => {
        setSimulator(!simulator);
    };

    const handleFormatidadeDivida = (amountMonth: number | string): string =>
        amountMonth === 1 ? `${amountMonth} mês` : `${amountMonth} meses`;

    /** set values */
    const handleSetValues = (key: string, value: string | number) => {
        setValues((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    /** set errors */
    const handleSetErrors = (key: any, message: string) => {
        setErrors((prevState) => ({
            ...prevState,
            [key]: {
                value: message,
                error: true,
            },
        }));
    };

    /** check validations and edit */
    const handleSave = () => {
        /** always whole numbersery  */
        if (values.desconto % 1 !== 0) {
            values.desconto = Math.floor(Number(values.desconto));
        }

        /** multa max 2% */
        if (Number(values.multa) > 2) {
            handleSetErrors(values.multa, "O percentual máximo para cobrança de multa é de 2,0%");
            return false;
        }

        /** desconto max 99% */
        if (values.desconto > 99) {
            handleSetErrors(String(values.desconto), "O percentual máximo para desconto é de 99%");
            return false;
        }

        /** confirmEdit */
        if (values.maximoParcela > 12) {
            setConfirmEdit(true);
            return false;
        }

        dispatch(actionsNegociation.updateNegociation(values));
        return true;
    };

    /** check errors */
    const handleCheckError = () => {
        const isErrors = Object.values(errors).filter((item) => item.error);

        if (isErrors.length) return true;

        return false;
    };

    const handleConfirm = () => {
        dispatch(actionsNegociation.updateNegociation(values));
        setConfirmEdit(false);
        handleToggleEdit();
    };
    const handleCancel = () => {
        setConfirmEdit(false);
    };

    if (edit) {
        return (
            <>
                <tr className="itemListaRegras">
                    <Item text={handleFormatidadeDivida(idadeDivida)} errors={handleCheckError()} />
                    <Item text={juros} errors={handleCheckError()} />
                    <InputEdit
                        name="desconto"
                        initialValue={values.desconto}
                        handleSetValues={handleSetValues}
                        errors={handleCheckError()}
                    />
                    <InputEdit
                        name="maximoParcela"
                        initialValue={values.maximoParcela}
                        handleSetValues={handleSetValues}
                        options={Array.from({ length: 24 }).map((_, index) => ({
                            name: String(index + 1),
                            value: index + 1,
                        }))}
                        errors={handleCheckError()}
                    />
                    {/* <Item text={atenuador} errors={handleCheckError()} /> */}
                    <Item text={multa} errors={handleCheckError()} />
                    <Item text={reajuste} errors={handleCheckError()} />
                    <Item text={assessoria} errors={handleCheckError()} />
                    <ActionsEdit
                        handleToggleEdit={handleToggleEdit}
                        handleSave={handleSave}
                        errors={handleCheckError()}
                    />
                </tr>

                {errors && (
                    <tr>
                        <td style={{ border: "none", textAlign: "center", color: "red" }} colSpan={8}>
                            {Object.values(errors)
                                .filter((item) => item.error)
                                .map((error) => error.value)
                                .join("; ")}
                        </td>
                    </tr>
                )}

                {confirmEdit && (
                    <SweetAlert
                        title={
                            <div className="txt-sweet-alert">
                                Tem certeza que deseja <br /> permitir o parcelamento em {values.maximoParcela}X ?
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
    }

    return (
        <tr className="itemListaRegras">
            <Item text={handleFormatidadeDivida(idadeDivida)} />
            <Item text={`${Number(juros).toFixed(1)}%`} />
            <Item text={`${desconto}%`} />
            <Item text={maximoParcela} />
            {/* <Item text={`${Number(atenuador).toFixed(1)}%`} /> */}
            <Item text={`${Number(multa).toFixed(1)}%`} />
            <Item text={`${Number(reajuste).toFixed(1)}%`} />
            <Item text={`${Number(assessoria).toFixed(1)}%`} />
            <Actions handleToggleEdit={handleToggleEdit} handleToggleSimulator={handleToggleSimulator} />

            {simulator && (
                <Simulator
                    {...props}
                    isOpen={simulator}
                    onClose={handleToggleSimulator}
                    idadeDividaFormatado={handleFormatidadeDivida(idadeDivida)}
                />
            )}
        </tr>
    );
};

export default TbodyItem;
