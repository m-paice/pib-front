import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// actions
import { actions as actionsAuth } from "../../store/modules/auth/actions";

interface Props {}

const Login: React.FC<Props> = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [document, setDocument] = useState("460.328.018-10");

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDocument(event.target.value);
    };

    const handleClick = () => {
        if (!document.length || !document) return;

        dispatch(actionsAuth.login({ document }));
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
                <input
                    value={document}
                    onChange={handleChangeInput}
                    placeholder="type a document..."
                    style={{ marginBottom: 20 }}
                />

                <button onClick={handleClick}> Entrar </button>
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

export default Login;
