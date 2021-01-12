import React, { useCallback } from "react";

import InputMask from "react-input-mask";
import { Formik, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";

import { registerContainer } from "./RegisterContainer";

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
}

// components
import Input from "../../components/Fields/Input";

// validations form
const SignupSchema = Yup.object().shape({
    cpf: Yup.string()
        .matches(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/, "CPF inválido")
        .required("obrigatório"),
    name: Yup.string().required("obrigatório"),
    birthDate: Yup.string().matches(/^\d{2}\/\d{2}\/\d{4}$/, "data de nascimento inválido"),
    phone: Yup.string().matches(/^\(\d{2}\)\ \d{5}-\d{4}$/, "celular inválido"),
    email: Yup.string().required("obrigatório"),
    emailConfirm: Yup.string()
        .required("obrigatório")
        .oneOf([Yup.ref("email")], "os emails devem corresponder"),
    password: Yup.string().required("obrigatório"),
    passwordConfirm: Yup.string()
        .required("obrigatório")
        .oneOf([Yup.ref("password")], "as senhas devem corresponder"),
    terms: Yup.bool().oneOf([true], "os termos e condições são obrigatórios"),
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
};

interface Props {
    payload: {
        data: {};
        actions: {
            create(data): void;
        };
    };
}

const Register: React.FC<Props> = ({ payload }) => {
    const { data, actions } = payload;

    const { create } = actions;

    const handleSubmit = useCallback((values: FormValues) => {
        create(values);
    }, []);

    return (
        <div className="container meu-cadastro">
            <Formik initialValues={initialValues} validationSchema={SignupSchema} onSubmit={handleSubmit}>
                {(formikBag) => (
                    <Form>
                        <div className="descmod cadastro">
                            <div className="titulo-mob noneBr">
                                Faça seu cadastro para podermos te ajudar <br />a manter suas contas em dia.
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="form-group col-md-6">
                                <Field name="cpf">
                                    {(props: FieldProps) => (
                                        <div>
                                            <InputMask mask="999.999.999-99" {...props.field}>
                                                {() => (
                                                    <Input
                                                        placeholder="CPF"
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
                            <div className="form-group col-md-6">
                                <Field name="name">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input
                                                placeholder="Nome completo"
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

                        <div className="row mb-4">
                            <div className="form-group col-md-6">
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
                            <div className="form-group col-md-6">
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

                        <div className="row mb-4">
                            <div className="form-group col-md-6">
                                <Field name="email">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input placeholder="Email" className="form-control" {...props.field} />
                                            <span className="erro">
                                                {props.meta.touched && props.meta.error && props.meta.error}
                                            </span>
                                        </div>
                                    )}
                                </Field>
                            </div>
                            <div className="form-group col-md-6">
                                <Field name="emailConfirm">
                                    {(props: FieldProps) => (
                                        <div>
                                            <Input
                                                placeholder="Confirme seu email"
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

                        <div className="row">
                            <div className="form-group col-md-6">
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
                            <div className="form-group col-md-6">
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

                        <div className="row">
                            <div className="form-group col-md-6 d-flex mt-4 mb-4">
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

                        <div className="row">
                            <div className="form-group col-md-6 d-flex mb-4">
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

                        <div className="row">
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
