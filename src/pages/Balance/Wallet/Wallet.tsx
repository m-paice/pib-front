import React, { useState } from "react";

// components
import Select from "../../../components/unconnected/Fields/Select";

const optionsSituation = [
    { value: 0, label: "Todos" },
    { value: 1, label: "Em atraso" },
    { value: 2, label: "Em dia" },
    { value: 3, label: "Não negociada" },
    { value: 4, label: "Quitada" },
];

interface Props {
    amountPf: number;
    amountDebtsPf: number;
    amountWallet: number;
}

const Wallet: React.FC<Props> = ({ amountPf, amountDebtsPf, amountWallet }) => {
    const [situationSelected, setSituationSelected] = useState({
        value: 0,
        label: "Todos",
    });

    const handleSetSituation = (situation: any) => {
        setSituationSelected(situation);
    };

    const handleFormatPrice = (value: number) => value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

    return (
        <>
            <div className="d-flex justify-content-end">
                <div style={{ width: 196 }}>
                    <Select options={optionsSituation} value={situationSelected} onChange={handleSetSituation} />
                </div>
            </div>
            <div className="d-flex">
                <div className="col-md-4 text-center">
                    <b>{amountPf === 1 ? "Devedor" : "Devedores"}</b>
                    <div className="txt-saque">{amountPf}</div>
                </div>
                <div className="col-md-1 colum-width-2">
                    <div className="traco-vertical-p"></div>
                </div>
                <div className="col-md-3 text-center">
                    <b>{amountDebtsPf === 1 ? "Dívida" : "Dívidas"}</b>
                    <div className="txt-saque">{amountDebtsPf}</div>
                </div>
                <div className="col-md-1 colum-width-2">
                    <div className="traco-vertical-p"></div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="font-25">
                        <b>Total da Carteira</b>
                    </div>
                    <div className="txt-saque">{handleFormatPrice(amountWallet)}</div>
                </div>
            </div>
        </>
    );
};

export default Wallet;
