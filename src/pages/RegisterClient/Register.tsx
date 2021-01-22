import React, { useState } from "react";

import history from "../../utils/history";
import validators from "../../utils/validators";

interface Props {}

const Register: React.FC<Props> = ({}) => {
    const [value, setValue] = useState("");

    const handleSetPageRegister = () => {
        if (validators.document(value) === "pj") {
            history.push("/registerpj");
        }

        if (validators.document(value) === "pf") {
            history.push("/register");
        }
    };

    return (
        <div className="page">
            <div
                className="container meu-cadastro"
                style={{
                    maxWidth: 500,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                <div className="descmod cadastro">
                    <div className="titulo-mob noneBr" style={{ textAlign: "center" }}>
                        Verifique seu documento
                    </div>
                </div>
                <input
                    className="form-control"
                    placeholder="Digite seu CPF ou CNPJ"
                    value={value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
                />

                <button style={{ marginTop: 50 }} className="btpadrao" type="button" onClick={handleSetPageRegister}>
                    verificar
                </button>
            </div>
        </div>
    );
};

export default Register;
