import React from "react";

// assets
import ImageError from "../../assets/imagens/icone-erro.png";

interface Props {
    type: "consumidor" | "lojista";
}

const message = {
    lojista: "Usuário não habilitando pela associação comercial.",
    consumidor: "Usuário não habilitado, verifique seu e-mail para ativar sua conta",
};

const UnableUser: React.FC<Props> = ({ type }) => {
    return (
        <div className="alerta">
            <div className="container">
                <img src={ImageError} alt="image-error" /> <strong>Atenção</strong> - {message[type]}
            </div>
        </div>
    );
};

export default UnableUser;
