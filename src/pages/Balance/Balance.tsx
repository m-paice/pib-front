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
        situationNames: number[];
        amountSituation: { [key: number]: number };
        isValidValue: boolean;
    };
}

const Balance: React.FC<Props> = ({ payload }) => {
    const { availableValue, receiveValue, delayValue, situationNames, amountSituation, isValidValue } = payload;

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
                    <FlowReceivement situationNames={situationNames} amountSituation={amountSituation} />

                    <SeparatorHorizontal />

                    <ValuesReceived />
                </div>

                <div className="row">
                    <SeparatorHorizontal />

                    <Wallet />
                </div>
            </div>
        </div>
    );
};

export default balanceContainer(Balance);
