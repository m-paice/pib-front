import React from "react";

// components
import ApprovedDebits from "../../components/BoxDebits/ApprovedDebits";
import DeniedDebts from "../../components/BoxDebits/DeniedDebts";

import Fotoperfil2 from "../../assets/imagens/fotoperfil2.png";
import Caratriste from "../../assets/imagens/caratriste.png";

interface Props {}

const Debits: React.FC<Props> = (props) => {
    return (
        <div className="page">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img className="pessoa" src={Fotoperfil2} />
                        <img className="cara" src={Caratriste} />
                    </div>
                    <div className="col-md-9 titulos noneBr">
                        <h2>Ops...</h2>
                        <h3>
                            Identificamos <b>3 pendências</b> no seu CPF
                            <br />
                            no total de <b>R$ 1.800,00</b>
                        </h3>
                    </div>
                </div>

                <ApprovedDebits status="paidOut" />
                <ApprovedDebits status="late" />
                <ApprovedDebits status="next" />
                <DeniedDebts />
            </div>
        </div>
    );
};

export default Debits;
