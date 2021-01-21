import React from "react";

// assets
import ImageError from "../../assets/imagens/icone-erro.png";

interface Props {}

const UnableUser: React.FC<Props> = (props) => {
    return (
        <div className="alerta">
            <div className="container">
                <img src={ImageError} alt="image-error" /> <strong>Atenção</strong> - Usuário não habilitando pela
                associação comercial.
            </div>
        </div>
    );
};

export default UnableUser;
