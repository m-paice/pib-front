import React, { useCallback, CSSProperties, useEffect, useState } from "react";

import InputMask from "react-input-mask";
import { Formik, Form, Field, FieldProps, useFormikContext } from "formik";
import * as Yup from "yup";

import { registerContainer } from "./RegisterContainer";

import { CertificateData } from "../../context/usuario";

const radioStyles: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    width: 70,
    height: 25,

    borderRadius: 15,

    fontWeight: "bold",
};

interface FormValues {
    cpf: string;
    name: string;
    birthDate: string;
    phone: string;
    email: string;
    emailConfirm: string;
    password: string;
    passwordConfirm: string;
    terms: boolean;
    receiveTips: boolean;
    active: string;
}

// components
import Input from "../../components/Fields/Input";
import MessageRange from "../../components/MessageRange";

// validations form
const SignupSchema = Yup.object().shape({
    cpf: Yup.string().required("obrigatório"),
    // .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido")
    name: Yup.string().required("obrigatório"),
    birthDate: Yup.string()
        .required("obrigatório")
        .matches(/^\d{2}\/\d{2}\/\d{4}$/, "data de nascimento inválido"),
    phone: Yup.string()
        .required("obrigatório")
        .matches(/^\(\d{2}\)\ \d{5}-\d{4}$/, "celular inválido"),
    email: Yup.string().required("obrigatório"),
    emailConfirm: Yup.string()
        .required("obrigatório")
        .oneOf([Yup.ref("email")], "os emails devem corresponder"),
    password: Yup.string().required("obrigatório"),
    passwordConfirm: Yup.string()
        .required("obrigatório")
        .oneOf([Yup.ref("password")], "as senhas devem corresponder"),
    terms: Yup.bool().oneOf([true], "os termos e condições são obrigatórios"),
    active: Yup.string().required("obrigatório"),
});

const initialValues: FormValues = {
    cpf: "",
    name: "",
    birthDate: "",
    phone: "",
    email: "",
    emailConfirm: "",
    password: "",
    passwordConfirm: "",
    terms: false,
    receiveTips: false,
    active: "",
};

interface Props {
    payload: {
        data: {
            dataCertificate: CertificateData;
        };
        actions: {
            create(data): void;
            handleClearDataCertificate(): void;
        };
    };
}

const Register: React.FC<Props> = ({ payload }) => {
    const { data, actions } = payload;

    const { create, handleClearDataCertificate } = actions;
    const { dataCertificate } = data;

    const [values, setValues] = useState<FormValues>(initialValues);

    const handleSubmit = (values: FormValues) => {
        create(values);
    };

    useEffect(() => {
        if (dataCertificate) {
            setValues({
                ...values,
                email: dataCertificate.email,
                emailConfirm: dataCertificate.email,
                name: dataCertificate.name,
                cpf: dataCertificate.cpf,
            });
        }

        return () => {
            handleClearDataCertificate();
        };
    }, [dataCertificate]);

    const isDataCertificate = !!dataCertificate;

    return (
        <div className="meu-cadastro">
            <Formik initialValues={values} validationSchema={SignupSchema} onSubmit={handleSubmit} enableReinitialize>
                {(formikBag) => (
                    <Form>
                        <div className="descmod">
                            <div className="container titulo-mob noneBr">
                                Faça seu cadastro para podermos te ajudar <br />a manter suas contas em dia.
                            </div>
                        </div>
                        <div className="container row mb-4">
                            <div className="pl-0 form-group col-md-6">
                                <Field name="cpf">
                                    {(props: FieldProps) => (
                                        <div>
                                            <InputMask
                                                mask="999.999.999-99"
                                                {...props.field}
                                                disabled={isDataCertificate}
                                            >
                                                {() => (
                                                    <Input
                                                        placeholder="CPF"
                                                        className="telefone form-control"
                                                        {...props.field}
                                                        disabled={isDataCertificate}
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
                            <div className="pl-0 form-group col-md-6">
                                <Field name="name">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input
                                                placeholder="Nome completo"
                                                className="form-control"
                                                {...props.field}
                                                disabled={isDataCertificate}
                                            />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                        </div>

                        <div className="container row mb-4">
                            <div className="pl-0 form-group col-md-6">
                                <Field name="birthDate">
                                    {(props: FieldProps) => (
                                        <div>
                                            <InputMask mask="99/99/9999" {...props.field}>
                                                {() => (
                                                    <Input
                                                        placeholder="Data de Nascimento"
                                                        className="data-nascimento form-control"
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
                            <div className="pl-0 form-group col-md-6">
                                <Field name="phone">
                                    {(props: FieldProps) => (
                                        <div>
                                            <InputMask mask="(99) 99999-9999" {...props.field}>
                                                {() => (
                                                    <Input
                                                        placeholder="Celular"
                                                        className="telefone form-control"
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

                        <div className="container row mb-4">
                            <div className="pl-0 form-group col-md-6">
                                <Field name="email">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input
                                                placeholder="Email"
                                                className="form-control"
                                                {...props.field}
                                                disabled={isDataCertificate}
                                            />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="pl-0 form-group col-md-6">
                                <Field name="emailConfirm">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input
                                                placeholder="Confirme seu email"
                                                className="form-control"
                                                disabled={isDataCertificate}
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

                        <div className="container row">
                            <div className="pl-0 form-group col-md-6">
                                <Field name="password">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input
                                                placeholder="Senha"
                                                type="password"
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
                            <div className="pl-0 form-group col-md-6">
                                <Field name="passwordConfirm">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input
                                                placeholder="Confirme sua senha"
                                                type="password"
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
                        </div>

                        <div className="container row">
                            <div className="pl-0 form-group col-md-6 d-flex mt-4 mb-4">
                                <div>
                                    <Field name="terms">
                                        {(props: FieldProps) => (
                                            <div>
                                                <div className="text ">
                                                    <Input
                                                        type="checkbox"
                                                        className="mr-2"
                                                        {...props.field}
                                                        checked={props.field.value}
                                                    />
                                                    Li e concordo com o <i>Termo de Uso</i> e a{" "}
                                                    <i>Política de Privacidade</i>
                                                </div>
                                                <span className="erro">
                                                    {props.meta.touched && props.meta.error && props.meta.error}
                                                </span>
                                            </div>
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </div>

                        <div className="container row">
                            <div className="pl-0 form-group col-md-6 d-flex mb-4">
                                <div>
                                    <Field name="receiveTips">
                                        {(props: FieldProps) => (
                                            <div>
                                                <div className="text">
                                                    <Input
                                                        type="checkbox"
                                                        className="mr-2"
                                                        {...props.field}
                                                        checked={props.field.value}
                                                    />
                                                    Gostaria de receber dicas e oportunidades da Credas
                                                </div>
                                                <span className="erro">
                                                    {props.meta.touched && props.meta.error && props.meta.error}
                                                </span>
                                            </div>
                                        )}
                                    </Field>
                                </div>
                            </div>
                        </div>

                        <MessageRange>
                            <div className="container col-xs-12 p-0">
                                Para finalizar, qual opção você prefere para validar seu cadastro?
                            </div>
                            <Field name="active">
                                {(props: FieldProps) => (
                                    <div className="container d-flex p-0">
                                        <label
                                            htmlFor="active"
                                            style={{
                                                ...radioStyles,
                                                backgroundColor:
                                                    props.form.values.active === "sms" ? "#fff" : "#2e6d9d",
                                                color: props.form.values.active === "sms" ? "#2e6d9d" : "#fff",
                                            }}
                                        >
                                            SMS
                                        </label>
                                        <input
                                            type="radio"
                                            name="active"
                                            id="active"
                                            value="sms"
                                            onChange={props.field.onChange}
                                            style={{ display: "none" }}
                                        />

                                        <label
                                            htmlFor="active2"
                                            style={{
                                                ...radioStyles,
                                                marginLeft: 7,
                                                backgroundColor:
                                                    props.form.values.active === "email" ? "#fff" : "#2e6d9d",
                                                color: props.form.values.active === "email" ? "#2e6d9d" : "#fff",
                                            }}
                                        >
                                            E-mail
                                        </label>
                                        <input
                                            type="radio"
                                            name="active"
                                            id="active2"
                                            value="email"
                                            onChange={props.field.onChange}
                                            style={{ display: "none" }}
                                        />
                                    </div>
                                )}
                            </Field>
                            <span className="erro" style={{ color: "red" }}>
                                {formikBag.touched.active && formikBag.errors.active && formikBag.errors.active}
                            </span>
                            <br />
                        </MessageRange>

                        <div className="p-0 container row">
                            <div className="bbuttons col-md-6">
                                <button className="btpadrao" type="submit">
                                    Salvar Alterações
                                </button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default registerContainer(Register);
