import React from "react";

import BoxDebtorBase from "../../components/BoxDebtorBase";
import Header from "../../components/BoxDebtorBase/Header";

interface Props {}

const DebtorBase: React.FC<Props> = (props) => {
    return (
        <div className="page">
            <div className="container">
                <div className="listaBaseDev">
                    <div className="descmod cadastro">
                        <div className="col-xs-9">
                            <b>Fique por dentro das negociações</b>
                            <h5>Selecione para ver mais detalhes</h5>
                        </div>
                        <div className="col-sm-3">
                            <input placeholder="Pesquisar:" className="form-control inputAzul" />
                        </div>
                    </div>

                    <Header />
                    <BoxDebtorBase />
                    <BoxDebtorBase />
                    <BoxDebtorBase />
                    <BoxDebtorBase />
                </div>
            </div>
        </div>
    );
};

export default DebtorBase;
