import React, { useEffect } from "react";

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
        receivedPortion: { [key: string]: any };
        amountInCashOrPortion(): { [key: number]: number };
        filterInCashOrPortion(situation: number): { [key: number]: number };
        isValidValue: boolean;
        amountPf: number;
        filterAmountDebtorsForSituation(situation: number): number;
        amountDebtsPf: number;
        filterAmountDebtsForSituation(situation: number): number;
        amountWallet: number;
        filterAmountWalletForSituation(situation: number): number;

        handleFlowReceived(amountMonth: number): number[];
        handleFlowValueReceived(amountMonth: number): number[];

        actions: {
            handleLoadDebtor(): void;
        };
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
        receivedPortion,
        amountInCashOrPortion,
        filterInCashOrPortion,
        isValidValue,
        amountPf,
        filterAmountDebtorsForSituation,
        amountDebtsPf,
        filterAmountDebtsForSituation,
        amountWallet,
        filterAmountWalletForSituation,

        handleFlowReceived,
        handleFlowValueReceived,

        actions,
    } = payload;

    const { handleLoadDebtor } = actions;

    useEffect(() => {
        handleLoadDebtor();
    }, []);

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
                        receivedPortion={receivedPortion}
                        handleFlowReceived={handleFlowReceived}
                    />

                    <SeparatorHorizontal />

                    <ValuesReceived
                        amountInCashOrPortion={amountInCashOrPortion}
                        filterInCashOrPortion={filterInCashOrPortion}
                        handleFlowValueReceived={handleFlowValueReceived}
                    />
                </div>

                <div>
                    <SeparatorHorizontal />

                    <Wallet
                        amountPf={amountPf}
                        amountDebtsPf={amountDebtsPf}
                        amountWallet={amountWallet}
                        filterAmountDebtorsForSituation={filterAmountDebtorsForSituation}
                        filterAmountDebtsForSituation={filterAmountDebtsForSituation}
                        filterAmountWalletForSituation={filterAmountWalletForSituation}
                    />
                </div>
            </div>
        </div>
    );
};

export default balanceContainer(Balance);
