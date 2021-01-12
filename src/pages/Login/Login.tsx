import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import InputMask from "react-input-mask";
import { Formik, Form, Field, FieldProps, FormikProps } from "formik";

// components
import Input from "../../components/Fields/Input";

import { loginContainer } from "./LoginContainer";

interface FormValues {
    login: string;
    password: string;
}

const initialValues: FormValues = {
    login: "",
    password: "",
};

interface Props {
    payload: {
        data: {};
        actions: {
            login(data): void;
        };
    };
}

const Login: React.FC<Props> = ({ payload }) => {
    const { actions } = payload;
    const { login } = actions;

    const handleSubmit = (values: FormValues) => {
        if (!values.login.length || !values.password.length) return;

        login({ login: values.login.replace("_", ""), senha: values.password });
    };

    return (
        <div>
            <header id="masthead" className="site-header limita" role="banner" data-parallax="scroll">
                <div className="site-header-wrap">
                    <div className="site-branding" style={{ height: 194 }}>
                        <div className="row container">
                            <div className="col-xs-12 col-sm-2">
                                <div className="site-logo">{/* <img src={Logo} /> */}</div>
                            </div>

                            <div className="col-xs-12 col-sm-10 bxmenu">
                                <nav
                                    id="site-navigation"
                                    className="main-navigation"
                                    role="navigation"
                                    style={{ display: "flex" }}
                                >
                                    <ul style={{ width: "100%" }}>
                                        <li>CONSUMIDORES</li>
                                        <li>QUEM SOMOS</li>
                                        <li>CADASTRE-SE</li>
                                    </ul>
                                    <div>
                                        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                                            {(formikProps: FormikProps<FormValues>) => (
                                                <Form>
                                                    <div className="form-group ">
                                                        <Field name="login">
                                                            {(props: FieldProps) => (
                                                                <div>
                                                                    {props.field.value.replace(/\D/g, "").length >
                                                                    11 ? (
                                                                        <InputMask
                                                                            mask="99.999.999/9999-99"
                                                                            {...props.field}
                                                                        >
                                                                            {() => (
                                                                                <Input
                                                                                    placeholder="CPF ou CNPJ"
                                                                                    className="form-control"
                                                                                    {...props.field}
                                                                                />
                                                                            )}
                                                                        </InputMask>
                                                                    ) : (
                                                                        <InputMask
                                                                            mask="999.999.999-99*"
                                                                            {...props.field}
                                                                        >
                                                                            {() => (
                                                                                <Input
                                                                                    placeholder="CPF ou CNPJ"
                                                                                    className="form-control"
                                                                                    {...props.field}
                                                                                />
                                                                            )}
                                                                        </InputMask>
                                                                    )}
                                                                    <span className="erro">
                                                                        {props.meta.touched &&
                                                                            props.meta.error &&
                                                                            props.meta.error}
                                                                    </span>
                                                                </div>
                                                            )}
                                                        </Field>
                                                    </div>

                                                    {(formikProps.values.login.replace(/\D/g, "").length === 11 ||
                                                        formikProps.values.login.replace(/\D/g, "").length === 14) && (
                                                        <div>
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
                                                                            {props.meta.touched &&
                                                                                props.meta.error &&
                                                                                props.meta.error}
                                                                        </span>
                                                                    </div>
                                                                )}
                                                            </Field>

                                                            <button className="btpadrao" type="submit">
                                                                Entrar
                                                            </button>
                                                        </div>
                                                    )}
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default loginContainer(Login);
