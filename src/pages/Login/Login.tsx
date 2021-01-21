import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import InputMask from "react-input-mask";
import { Formik, Form, Field, FieldProps, FormikProps } from "formik";

// components
import Input from "../../components/Fields/Input";

// assets
import IconKey from "../../assets/imagens/icon-chave.png";

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

    const [openLogin, setOpenLogin] = useState(false);

    const handleToggleLogin = () => {
        setOpenLogin(!openLogin);
    };

    const handleSubmit = (values: FormValues) => {
        if (!values.login.length || !values.password.length) return;

        login({ login: values.login.replace("_", ""), senha: values.password });
    };

    return (
        <div>
            <header id="masthead" className="site-header m-0">
                <div
                    className="site-branding"
                    style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                    <div style={{ width: "100%", maxWidth: 900, minHeight: 200 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                            <div
                                style={{
                                    color: "#fff",
                                    borderRight: "1px solid #fff",
                                    height: 20,

                                    fontWeight: "bold",
                                }}
                            >
                                <span style={{ margin: "0 7px", cursor: "pointer" }}>CONSUMIDORES</span>
                            </div>
                            <div
                                style={{
                                    color: "#fff",
                                    borderRight: "1px solid #fff",
                                    height: 20,

                                    fontWeight: "bold",
                                }}
                            >
                                <span style={{ margin: "0 7px", cursor: "pointer" }}>EMPRESAS</span>
                            </div>
                            <div
                                style={{
                                    color: "#fff",
                                    borderRight: "1px solid #fff",
                                    height: 20,

                                    fontWeight: "bold",
                                }}
                            >
                                <span style={{ margin: "0 7px", cursor: "pointer" }}>QUEM SOMOS</span>
                            </div>
                            <div
                                style={{
                                    color: "#fff",
                                    borderRight: "1px solid #fff",
                                    height: 20,

                                    fontWeight: "bold",
                                }}
                            >
                                <span style={{ margin: "0 7px", cursor: "pointer" }}>CADASTRE-SE</span>
                            </div>
                            <div style={{ color: "#fff", height: 20, borderRight: "1px solid #fff" }}>
                                <img
                                    style={{ margin: "0 7px", cursor: "pointer", marginTop: "-5px" }}
                                    src={IconKey}
                                    alt="icone-chave"
                                />
                            </div>
                            <div>
                                <button
                                    onClick={handleToggleLogin}
                                    style={{
                                        fontWeight: "bold",
                                        backgroundColor: "rgb(255, 255, 255)",
                                        borderRadius: "15px",
                                        color: "#14ccfd",
                                        textTransform: "uppercase",
                                        border: "none",
                                        fontSize: "16px",
                                        height: "31px",
                                        padding: "2px 8px",
                                        margin: "0 7px",
                                        cursor: "pointer",
                                    }}
                                >
                                    ENTRAR
                                </button>
                            </div>
                        </div>
                        {openLogin && (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginTop: 15,
                                }}
                            >
                                <div
                                    style={{
                                        width: 200,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-end",
                                    }}
                                >
                                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                                        {(formikProps: FormikProps<FormValues>) => (
                                            <Form>
                                                <Field name="login">
                                                    {(props: FieldProps) => (
                                                        <div>
                                                            <input
                                                                style={{
                                                                    borderRadius: 14,
                                                                    border: "none",
                                                                    width: 200,
                                                                    height: 30,
                                                                    textAlign: "right",
                                                                }}
                                                                {...props.field}
                                                                type="text"
                                                                placeholder="Digite seu CPF ou CNPJ"
                                                            />
                                                            <span className="erro">
                                                                {props.meta.touched &&
                                                                    props.meta.error &&
                                                                    props.meta.error}
                                                            </span>
                                                        </div>
                                                    )}
                                                </Field>
                                                <Field name="password">
                                                    {(props: FieldProps) => (
                                                        <div>
                                                            <input
                                                                style={{
                                                                    borderRadius: 14,
                                                                    border: "none",
                                                                    width: 200,
                                                                    height: 30,
                                                                    textAlign: "right",
                                                                }}
                                                                type="password"
                                                                placeholder="Senha"
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

                                                <button type="submit" style={{ display: "none" }}>
                                                    {" "}
                                                    logar{" "}
                                                </button>

                                                <span
                                                    style={{
                                                        width: "119px",
                                                        fontSize: "11px",
                                                        color: "#fff",
                                                        marginTop: "7px",
                                                        textDecoration: "underline",
                                                        cursor: "pointer",
                                                    }}
                                                >
                                                    Esqueci minha senha
                                                </span>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        )}
                    </div>
                    <div style={{ width: "100%", maxWidth: 900, minHeight: 400, display: "flex" }}>
                        <div style={{ width: "50%" }}>
                            <span style={{ color: "#fff", fontSize: 36 }}>Tenha você também</span>
                            <h1 style={{ color: "#fff", margin: 0, fontSize: 80, fontWeight: "bold" }}>
                                sua conta <br /> em dia
                            </h1>
                            <input style={{ borderRadius: 20 }} type="text" placeholder="Digite seu CPF ou CNPJ" />
                        </div>
                        <div style={{ width: "50%" }}>IMAGEM</div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default loginContainer(Login);
