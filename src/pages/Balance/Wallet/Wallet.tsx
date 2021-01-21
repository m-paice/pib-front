import React, { useState, useEffect } from "react";

// components
import Select from "../../../components/unconnected/Fields/Select";

const optionsSituation = [
    { value: 0, label: "Todos" },
    { value: 1, label: "Não negociada" },
    { value: 2, label: "Em atraso" },
    { value: 3, label: "Em dia" },
    { value: 4, label: "Quitada" },
];

interface Props {
    amountPf: number;
    filterAmountDebtorsForSituation(situation: number): number;
    amountDebtsPf: number;
    filterAmountDebtsForSituation(situation: number): number;
    amountWallet: number;
    filterAmountWalletForSituation(situation: number): number;
}

const Wallet: React.FC<Props> = ({
    amountPf,
    filterAmountDebtorsForSituation,
    amountDebtsPf,
    filterAmountDebtsForSituation,
    amountWallet,
    filterAmountWalletForSituation,
}) => {
    const [state, setState] = useState({
        amountPf,
        amountDebtsPf,
        amountWallet,
    });

    const [situationSelected, setSituationSelected] = useState({
        value: 0,
        label: "Todos",
    });

    useEffect(() => {
        const amountPfCount = filterAmountDebtorsForSituation(situationSelected.value);
        const amountDebtsPfCount = filterAmountDebtsForSituation(situationSelected.value);
        const amountWalletCount = filterAmountWalletForSituation(situationSelected.value);

        setState({
            amountPf: amountPfCount,
            amountDebtsPf: amountDebtsPfCount,
            amountWallet: amountWalletCount,
        });
    }, [situationSelected.value]);

    const handleSetSituation = (situation: any) => {
        setSituationSelected(situation);
    };

    const handleFormatPrice = (value: number) => value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });

    return (
        <>
            <div className="d-flex justify-content-center mb-5 mt-5">
                <div className="font-25">
                    <b>Total da Carteira</b>
                </div>
                <div style={{ width: 196, marginLeft: 50 }}>
                    <Select options={optionsSituation} value={situationSelected} onChange={handleSetSituation} />
                </div>
            </div>
            <div className="d-flex">
                <div className="col-md-4 text-center">
                    <b className="font-25">{state.amountPf === 1 ? "Devedor" : "Devedores"}</b>
                    <div className="txt-saque">{state.amountPf}</div>
                </div>
                <div className="col-md-1 colum-width-2">
                    <div className="traco-vertical-p"></div>
                </div>
                <div className="col-md-3 text-center">
                    <b className="font-25">{state.amountDebtsPf === 1 ? "Dívida" : "Dívidas"}</b>
                    <div className="txt-saque">{state.amountDebtsPf}</div>
                </div>
                <div className="col-md-1 colum-width-2">
                    <div className="traco-vertical-p"></div>
                </div>
                <div className="col-md-3 text-center">
                    <div className="font-25">
                        <b>Total da Carteira</b>
                    </div>
                    <div className="txt-saque">{handleFormatPrice(state.amountWallet)}</div>
                </div>
            </div>
        </>
    );
};

export default Wallet;
