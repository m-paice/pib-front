import React, { CSSProperties } from "react";

import { useUser } from "../../context/usuario";

const stylesContainer: CSSProperties = {
    maxWidth: 900,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
};

interface Props {}

const ForgotPassword: React.FC<Props> = (props) => {
    const { email } = useUser();

    return (
        <div className="page">
            <div className="container meu-cadastro" style={stylesContainer}>
                <div className="descmod cadastro">
                    <div className="titulo-mob noneBr" style={{ textAlign: "center" }}>
                        Enviamos um e-mail para {email}. Verifique sua caixa de entrada para mais informações!
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
