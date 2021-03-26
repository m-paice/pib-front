import React from "react";

// assets
import ImageError from "../../assets/imagens/icone-erro.png";

const message = {
    lojista: "Usuário não habilitando pela associação comercial.",
    consumidor: "Usuário não habilitado, verifique seu e-mail para ativar sua conta",
    ativarNotificacao: "Você ainda não ativou um tipo de notificação. Clique aqui para ativar agora",
};

const WarningText: React.FC = ({ children }) => {
    return (
        <div className="alerta">
            <div className="container d-flex align-items-center">
                <img src={ImageError} alt="image-error" /> <strong>Atenção</strong> &nbsp;- {children}
            </div>
        </div>
    );
};

export default WarningText;
