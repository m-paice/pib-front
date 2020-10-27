import React, { useState } from "react";

import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

// actions
import { actions as actionsAuth } from "../../store/modules/auth/actions";

interface Props {}

const Login: React.FC<Props> = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [state, setState] = useState("pf");

    const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setState(event.target.value);
    };

    const handleClick = () => {
        dispatch(actionsAuth.login({ type: state }));
    };

    return (
        <div
            style={{
                display: "flex",
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
                <select style={{ color: "#000", marginBottom: 20 }} onChange={handleChangeSelect} id="">
                    <option style={{ color: "#000" }} value="pf">
                        Pessoa Física
                    </option>
                    <option style={{ color: "#000" }} value="pj">
                        Pessoa Jurídica
                    </option>
                </select>

                <button onClick={handleClick}> Entrar </button>
            </div>
        </div>
    );
};

export default Login;
