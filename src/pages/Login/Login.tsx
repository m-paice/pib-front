import React, { useState, CSSProperties, useEffect } from "react";

import { useHistory } from "react-router-dom";
import { Formik, Form, Field, FieldProps, FormikProps } from "formik";
import { mask, unMask } from "remask";

// components
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

import { useUser } from "../../context/usuario";

// assets
import IconKey from "../../assets/imagens/icon-chave.png";
import ImagePeople from "../../assets/people.png";

import { loginContainer } from "./LoginContainer";

const navItem: CSSProperties = {
    color: "#fff",
    borderRight: "1px solid #fff",
    height: 20,
    fontWeight: "bold",
};

const buttonLogin: CSSProperties = {
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
};

const containerLogin: CSSProperties = {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 15,
    position: "absolute",
    zIndex: 10,
    width: "100%",
};

const contentLogin: CSSProperties = {
    width: 200,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
};

const input: CSSProperties = {
    borderRadius: 14,
    border: "none",
    width: 200,
    height: 30,
    textAlign: "right",
};

const forgotPasswordStyle: CSSProperties = {
    width: "119px",
    fontSize: "11px",
    color: "#fff",
    marginTop: "7px",
    textDecoration: "underline",
    cursor: "pointer",
};

const buttonSubmit: CSSProperties = {
    width: "20px",
    fontSize: "11px",
    color: "#fff",
    marginTop: "7px",
    textDecoration: "underline",
    cursor: "pointer",
    padding: 0,
    backgroundColor: "transparent",
    border: "none",
};

const messageErrorStyle: CSSProperties = {
    textAlign: "center",
    color: "red",
};

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
        data: {
            messageError: string;
        };
        actions: {
            login(data): void;
        };
    };
}

const Login: React.FC<Props> = ({ payload }) => {
    const { actions, data } = payload;
    const { messageError } = data;
    const { login } = actions;

    const {
        check,
        forgotPassword,
        handleClearMessagesErros,
        messageErrorResponse,
        messageErrorForgotPasswordResponse,
    } = useUser();

    const history = useHistory();

    const [openLogin, setOpenLogin] = useState(false);
    const [documentText, setDocumentText] = useState("");

    useEffect(() => {
        handleClearMessagesErros();
    }, []);

    const handleToggleLogin = () => {
        setOpenLogin(!openLogin);
    };

    const handleSubmit = (values: FormValues) => {
        if (!values.login.length || !values.password.length) return;

        handleClearMessagesErros();
        login({ login: values.login.replace("_", ""), senha: values.password });
    };

    const handlePageForgotPassword = (values: FormValues) => {
        if (!values.login) return;

        forgotPassword(values.login);
    };

    const handleGetDocument = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value;

        if (event.key === "Enter" || event.keyCode === 13) {
            check(value);
        }
    };

    return (
        <div>
            <header id="masthead" className="site-header m-0">
                <div
                    className="site-branding"
                    style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                    <div style={{ width: "100%", maxWidth: 900, minHeight: 200, position: "relative" }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                            <div style={navItem}>
                                <span style={{ margin: "0 7px", cursor: "pointer" }}>CONSUMIDORES</span>
                            </div>
                            <div style={navItem}>
                                <span style={{ margin: "0 7px", cursor: "pointer" }}>EMPRESAS</span>
                            </div>
                            <div style={navItem}>
                                <span style={{ margin: "0 7px", cursor: "pointer" }}>QUEM SOMOS</span>
                            </div>
                            <div style={navItem}>
                                <span
                                    onClick={() => history.push("/register-client")}
                                    style={{ margin: "0 7px", cursor: "pointer" }}
                                >
                                    CADASTRE-SE
                                </span>
                            </div>
                            <div style={{ color: "#fff", height: 20, borderRight: "1px solid #fff" }}>
                                <img
                                    style={{ margin: "0 7px", cursor: "pointer", marginTop: "-5px" }}
                                    src={IconKey}
                                    alt="icone-chave"
                                />
                            </div>
                            <div>
                                <button onClick={handleToggleLogin} style={buttonLogin}>
                                    ENTRAR
                                </button>
                            </div>
                        </div>
                        {openLogin && (
                            <div style={containerLogin}>
                                <div style={contentLogin}>
                                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                                        {(formikProps: FormikProps<FormValues>) => (
                                            <Form>
                                                <Field name="login">
                                                    {(props: FieldProps) => (
                                                        <div>
                                                            <input
                                                                style={input}
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
                                                                style={input}
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

                                                <span
                                                    onClick={() => handlePageForgotPassword(formikProps.values)}
                                                    style={forgotPasswordStyle}
                                                >
                                                    Esqueci minha senha
                                                </span>
                                                <span style={{ marginLeft: 10, marginRight: 10, color: "#fff" }}>
                                                    |
                                                </span>
                                                <button type="submit" style={buttonSubmit}>
                                                    ENTRAR
                                                </button>
                                                {messageError && <p style={messageErrorStyle}> {messageError} </p>}
                                                {messageErrorForgotPasswordResponse && (
                                                    <p style={messageErrorStyle}>
                                                        {" "}
                                                        {messageErrorForgotPasswordResponse}{" "}
                                                    </p>
                                                )}
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
                            <input
                                style={{ borderRadius: 20 }}
                                onKeyDown={handleGetDocument}
                                onChange={(event) => {
                                    setDocumentText(
                                        mask(unMask(event.target.value), ["999.999.999-99", "99.999.999/9999-99"]),
                                    );
                                }}
                                value={documentText}
                                type="text"
                                placeholder="Digite seu CPF ou CNPJ"
                            />
                            {messageErrorResponse && <span>{messageErrorResponse}</span>}
                        </div>
                        <div style={{ width: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <img
                                src={ImagePeople}
                                alt="people-image"
                                style={{
                                    width: "500px",
                                    height: "525px",
                                    marginBottom: "250px",
                                }}
                            />
                        </div>
                    </div>
                </div>
            </header>

            <div
                style={{
                    height: "410px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                className="container"
            >
                <Carousel />
            </div>

            <Footer />
        </div>
    );
};

export default loginContainer(Login);
