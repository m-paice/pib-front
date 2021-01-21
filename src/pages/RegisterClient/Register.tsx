import React, { useState } from "react";

import { useParams } from "react-router-dom";

import history from "../../utils/history";
import validators from "../../utils/validators";

interface Props {}

const Register: React.FC<Props> = ({}) => {
    const { id } = useParams<{ id: string }>();

    const [value, setValue] = useState(id);

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
            <div className="container meu-cadastro" style={{ maxWidth: 500 }}>
                <div className="descmod cadastro">
                    <div className="titulo-mob noneBr">Verifique seu documento</div>
                </div>
                <input
                    className="form-control"
                    value={value}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setValue(event.target.value)}
                />

                <button style={{ marginTop: 50 }} type="button" onClick={handleSetPageRegister}>
                    verificar
                </button>
            </div>
        </div>
    );
};

export default Register;
