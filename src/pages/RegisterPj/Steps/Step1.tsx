import React from "react";

import InputMask from "react-input-mask";
import { Field, FieldProps, FormikProps } from "formik";

import Input from "../../../components/Fields/Input";

import { FormValues } from "../RegisterPj";

interface Props {
    handleNextSteps(formikPrps: FormikProps<FormValues>): void;
    formikProps: FormikProps<FormValues>;
}

const Step1: React.FC<Props> = ({ handleNextSteps, formikProps }) => {
    const handleNext = () => {
        handleNextSteps(formikProps);
    };

    return (
        <div>
            <div className="row">
                <div className="form-group col-xs-12 col-sm-6">
                    <Field name="cnpj">
                        {(props: FieldProps) => (
                            <div>
                                <InputMask mask="99.999.999/9999-99" {...props.field}>
                                    {() => <Input placeholder="CNPJ:" className="cnpj form-control" {...props.field} />}
                                </InputMask>

                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>

                <div className="form-group col-xs-12 col-sm-6">
                    <Field name="socialReason">
                        {(props: FieldProps) => (
                            <div>
                                <Input placeholder="Razão Social:" className="form-control" {...props.field} />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>
            </div>

            <div className="row">
                <div className="form-group col-xs-12 col-sm-6">
                    <Field name="fantasyName">
                        {(props: FieldProps) => (
                            <div>
                                <Input placeholder="Nome Fantasia:" className="form-control" {...props.field} />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>

                <div className="form-group col-xs-12 col-sm-6">
                    <Field name="foundationDate">
                        {(props: FieldProps) => (
                            <div>
                                <InputMask mask="99/99/9999" {...props.field}>
                                    {() => (
                                        <Input
                                            placeholder="Data da Fundação:"
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

            <div className="row">
                <div className="form-group col-xs-12 col-sm-6">
                    <Field name="namePartnerMain">
                        {(props: FieldProps) => (
                            <div>
                                <Input
                                    placeholder="Nome do Sócio Principal:"
                                    className="form-control"
                                    {...props.field}
                                />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>

                <div className="form-group col-xs-12 col-sm-6">
                    <Field name="namePartnerSecondary">
                        {(props: FieldProps) => (
                            <div>
                                <Input placeholder="Nome do 2° Sócio:" className="form-control" {...props.field} />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>
            </div>

            <div className="bbuttons col-xs-12 col-sm-3 p-0" onClick={handleNext}>
                <a className="btpadrao">PRÓXIMO</a>
            </div>
        </div>
    );
};

export default Step1;
