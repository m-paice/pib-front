import React from "react";

// components
import Collapse from "../../components/Collapse";

const names = [
    "Como Acesso Meu Painel?",
    "Como Alterar Minha Senha?",
    "Como acompanhar as ofertas?",
    "Como alterar a minha senha?",
    "Esqueci minha senha e agora?",
];

const Help: React.FC = () => {
    return (
        <div className="page">
            <div className="container">
                <div className="col-xs-12">
                    <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                        {names.map((name, index) => (
                            <Collapse
                                id={`c${index + 1}`}
                                href={`#c${index + 1}`}
                                key={index}
                                title={name}
                                text="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help;
