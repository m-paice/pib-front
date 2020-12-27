import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loginContainer } from "./LoginContainer";

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

    const history = useHistory();

    const [document, setDocument] = useState("460.328.018-10");
    const [password, setPassword] = useState("");

    const handleChangeInputLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDocument(event.target.value);
    };
    const handleChangeInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleClick = (event: React.FormEvent) => {
        event.preventDefault();

        if (!document.length || !password.length) return;

        login({ login: document, senha: password });
    };

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                height: "100vh",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: 500,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <form onSubmit={handleClick} autoComplete="off">
                    <input
                        value={document}
                        onChange={handleChangeInputLogin}
                        placeholder="type a document..."
                        style={{ marginBottom: 20 }}
                    />
                    <br />
                    <input
                        value={password}
                        type="password"
                        onChange={handleChangeInputPassword}
                        placeholder="type a document..."
                        style={{ marginBottom: 20 }}
                    />

                    <button type="submit"> Entrar </button>
                </form>
            </div>
            <button style={{ maxWidth: 200, margin: "15px 0" }} onClick={() => history.push("/register")}>
                {" "}
                Cadastro Consumidor{" "}
            </button>
            <button style={{ maxWidth: 200, margin: "15px 0" }} onClick={() => history.push("/registerpj")}>
                {" "}
                Cadastro Lojista{" "}
            </button>
        </div>
    );
};

export default loginContainer(Login);
