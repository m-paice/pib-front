import React from "react";

import InputMask from "react-input-mask";
import { Field, FieldProps } from "formik";

// components
import Input from "../../../components/Fields/Input";
import Select from "../../../components/Fields/Select";

// data banks
import options from "../../../data/banks.json";

interface Props {
    handlePrevSteps(): void;
}

const Step1: React.FC<Props> = ({ handlePrevSteps }) => {
    return (
        <div className="page">
            <div>
                <div className="row">
                    <div className="form-group col-xs-12 col-md-6">
                        <Field name="accountType">
                            {(props: FieldProps) => (
                                <Select
                                    options={[
                                        { value: "chain", label: "Corrente" },
                                        { value: "savings", label: "Poupança" },
                                    ]}
                                    placeholder="Tipo de conta"
                                    fieldProps={props}
                                />
                            )}
                        </Field>
                    </div>

                    <div className="form-group col-xs-12 col-md-6">
                        <Field name="bank">
                            {(props: FieldProps) => <Select options={options} placeholder="Banco" fieldProps={props} />}
                        </Field>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-xs-12 col-md-6">
                        <Field name="agency">
                            {(props: FieldProps) => (
                                <div>
                                    <Input placeholder="Agência:" className="form-control" {...props.field} />
                                    <span className="erro">
                                        {props.meta.touched && props.meta.error && props.meta.error}
                                    </span>
                                </div>
                            )}
                        </Field>
                    </div>

                    <div className="form-group col-xs-12 col-md-4">
                        <Field name="account">
                            {(props: FieldProps) => (
                                <div>
                                    <Input placeholder="Conta:" className="form-control" {...props.field} />
                                    <span className="erro">
                                        {props.meta.touched && props.meta.error && props.meta.error}
                                    </span>
                                </div>
                            )}
                        </Field>
                    </div>

                    <div className="form-group col-xs-12 col-md-2">
                        <Field name="digit">
                            {(props: FieldProps) => (
                                <div>
                                    <Input placeholder="Dígito:" className="form-control" {...props.field} />
                                    <span className="erro">
                                        {props.meta.touched && props.meta.error && props.meta.error}
                                    </span>
                                </div>
                            )}
                        </Field>
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-xs-12 col-md-6">
                        <Field name="holder">
                            {(props: FieldProps) => (
                                <div>
                                    <Input placeholder="Titular:" className="form-control" {...props.field} />
                                    <span className="erro">
                                        {props.meta.touched && props.meta.error && props.meta.error}
                                    </span>
                                </div>
                            )}
                        </Field>
                    </div>

                    <div className="form-group col-xs-12 col-md-6">
                        <Field name="cpfHolder">
                            {(props: FieldProps) => (
                                <div>
                                    <InputMask mask="999.999.999-99" {...props.field}>
                                        {() => (
                                            <Input
                                                placeholder="CPF do titular:"
                                                className="form-control"
                                                {...props.field}
                                            />
                                        )}
                                    </InputMask>

                                    <span className="erro">
                                        {props.meta.touched && props.meta.error && props.meta.error}
                                    </span>
                                </div>
                            )}
                        </Field>
                    </div>
                </div>

                <div className="boxcheck ">
                    <Field name="termsOfUse">
                        {(props: FieldProps) => (
                            <div>
                                <div className="d-flex align-items-center">
                                    <Input
                                        type="checkbox"
                                        id="termsOfUse"
                                        {...props.field}
                                        checked={props.field.value}
                                    />
                                    <label htmlFor="termsOfUse" className="tex">
                                        Li e concordo com o <i>Termo de Uso</i> e a<i>Política de Privacidade</i>
                                    </label>
                                </div>
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>
                <div className="boxcheck d-flex align-items-center">
                    <Field name="receiveTips">
                        {(props: FieldProps) => (
                            <div>
                                <Input type="checkbox" id="receiveTips" {...props.field} checked={props.field.value} />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                    <label htmlFor="receiveTips" className="tex">
                        Gostaria de receber dicas e oportunidades da Newco
                    </label>
                </div>
            </div>

            <div className="row">
                <div className="bbuttons col-xs-12 col-sm-3 p-0" onClick={handlePrevSteps}>
                    <a className="btpadrao">ANTERIOR</a>
                </div>
                <div className="bbuttons col-xs-12 col-sm-3 p-0">
                    <button type="submit" className="btpadrao">
                        SALVAR
                    </button>
                </div>
            </div>

            {/* <div className="faixamsg">
                <div className="container">
                    <div className="col-xs-12">
                        <div className="col-xs-12">
                            Em pouco minutos você receberá uma mensagem de ativação do seu cadastro.
                            <br />
                            <strong>Faça a validação e mantenha suas contas em dia.</strong>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Step1;
