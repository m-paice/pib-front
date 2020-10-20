import React from "react";

import { balanceContainer } from "./BalanceContainer";

// components
import { SeparatorHorizontal, SeparatorVertical } from "../../components/Separator";

import Available from "./Available";
import Received from "./Received";
import Late from "./Late";
import FlowReceivement from "./ FlowReceivement";
import ValuesReceived from "./ValuesReceived";
import Wallet from "./Wallet";

interface Props {
    payload: {
        availableValue: number;
        receiveValue: number;
        delayValue: number;
        paymentForm: number[];
        amountPayment(): { [key: number]: number };
        filterPaymentForSituaction(situation: number): { [key: number]: number };
        isValidValue: boolean;
        amountPf: number;
        amountDebtsPf: number;
        amountWallet: number;
    };
}

const Balance: React.FC<Props> = ({ payload }) => {
    const {
        availableValue,
        receiveValue,
        delayValue,
        paymentForm,
        amountPayment,
        filterPaymentForSituaction,
        isValidValue,
        amountPf,
        amountDebtsPf,
        amountWallet,
    } = payload;

    return (
        <div className="page">
            <div className="container">
                <div className="descmod cadastro">
                    <div className="row">
                        <Available availableValue={availableValue} isValidValue={isValidValue} />
                        <SeparatorVertical />
                        <Received receiveValue={receiveValue} />
                        <SeparatorVertical />
                        <Late delayValue={delayValue} />
                    </div>

                    <SeparatorHorizontal />
                </div>

                <div className="row">
                    <FlowReceivement
                        paymentForm={paymentForm}
                        amountPayment={amountPayment}
                        filterPaymentForSituaction={filterPaymentForSituaction}
                    />

                    <SeparatorHorizontal />

                    <ValuesReceived />
                </div>

                <div>
                    <SeparatorHorizontal />

                    <Wallet amountPf={amountPf} amountDebtsPf={amountDebtsPf} amountWallet={amountWallet} />
                </div>
            </div>
        </div>
    );
};

export default balanceContainer(Balance);
