import React, { useEffect, useState } from "react";

import axios from "axios";
import InputMask from "react-input-mask";
import { Field, FieldProps, useFormikContext } from "formik";

import { FormValues } from "../RegisterPj";

import Input from "../../../components/Fields/Input";

interface Props {}

interface FullAddress {
    bairro: string;
    cep: string;
    complemento: string;
    ddd: string;
    gia: string;
    ibge: string;
    localidade: string;
    logradouro: string;
    siafi: string;
    uf: string;
}

const Step2: React.FC<Props> = () => {
    const { setFieldValue } = useFormikContext<FormValues>();

    const [fullAddress, setFullAddress] = useState<FullAddress | null>(null);

    useEffect(() => {
        if (fullAddress) {
            setFieldValue("type", fullAddress.logradouro?.split(" ")[0]);
            setFieldValue("address", fullAddress.logradouro);
            setFieldValue("neighborhood", fullAddress.bairro);
            setFieldValue("city", fullAddress.localidade);
            setFieldValue("uf", fullAddress.uf);
        }
    }, [fullAddress]);

    const handleSerachZipcode = async (event: React.FocusEvent<HTMLInputElement>) => {
        const formatZipcode = event.target.value.replace(/([^\d])+/gim, "");

        try {
            const response = await axios.get(`https://viacep.com.br/ws/${formatZipcode}/json`);

            setFullAddress(response.data);
        } catch (error) {
            setFullAddress(null);
        }
    };

    return (
        <div>
            <div className="row">
                <div className="form-group col-xs-12 col-sm-6">
                    <Field name="cellPhone">
                        {(props: FieldProps) => (
                            <div>
                                <InputMask mask="(99) 99999-9999" {...props.field}>
                                    {() => (
                                        <Input placeholder="Tel:" className="telefone form-control" {...props.field} />
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
                    <Field name="email">
                        {(props: FieldProps) => (
                            <div>
                                <Input placeholder="E-mail:" className="form-control" {...props.field} />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>

                <div className="form-group col-xs-12 col-sm-6">
                    <Field name="emailConfirm">
                        {(props: FieldProps) => (
                            <div>
                                <Input placeholder="Confirmar E-mail:" className="form-control" {...props.field} />
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
                    <Field name="password">
                        {(props: FieldProps) => (
                            <div>
                                <Input placeholder="Senha:" className="form-control" type="password" {...props.field} />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>

                <div className="form-group col-xs-12 col-sm-6">
                    <Field name="passwordConfirm">
                        {(props: FieldProps) => (
                            <div>
                                <Input
                                    placeholder="Confirmar Senha:"
                                    className="form-control"
                                    type="password"
                                    {...props.field}
                                />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>
            </div>

            <div className="row">
                <div className="form-group col-xs-12 col-sm-3">
                    <Field name="zipcode">
                        {(props: FieldProps) => (
                            <div>
                                <InputMask mask="99999-999" {...props.field} onBlur={handleSerachZipcode}>
                                    {() => (
                                        <Input
                                            placeholder="CEP:"
                                            className="form-control"
                                            {...props.field}
                                            onBlur={handleSerachZipcode}
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

                <div className="form-group col-xs-12 col-sm-3">
                    <Field name="type">
                        {(props: FieldProps) => (
                            <div>
                                <Input placeholder="Tipo:" className="form-control" {...props.field} />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>

                <div className="form-group col-xs-12 col-sm-6">
                    <Field name="address">
                        {(props: FieldProps) => (
                            <div>
                                <Input placeholder="Endereço:" className="form-control" {...props.field} />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>
            </div>

            <div className="row">
                <div className="form-group col-xs-12 col-sm-3">
                    <Field name="number">
                        {(props: FieldProps) => (
                            <div>
                                <Input placeholder="Número:" className="form-control" {...props.field} />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>

                <div className="form-group col-xs-12 col-sm-3">
                    <Field name="complement">
                        {(props: FieldProps) => (
                            <div>
                                <Input placeholder="Complemento:" className="form-control" {...props.field} />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>

                <div className="form-group col-xs-12 col-sm-6">
                    <Field name="neighborhood">
                        {(props: FieldProps) => (
                            <div>
                                <Input placeholder="Bairro:" className="form-control" {...props.field} />
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
                    <Field name="city">
                        {(props: FieldProps) => (
                            <div>
                                <Input placeholder="Cidade:" className="form-control" {...props.field} />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>

                <div className="form-group col-xs-12 col-sm-6">
                    <Field name="uf">
                        {(props: FieldProps) => (
                            <div>
                                <Input placeholder="UF:" className="form-control" maxLength={2} {...props.field} />
                                <span className="erro">
                                    {props.meta.touched && props.meta.error && props.meta.error}
                                </span>
                            </div>
                        )}
                    </Field>
                </div>
            </div>
        </div>
    );
};

export default Step2;
