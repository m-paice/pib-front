import React from "react";

// components
import { SeparatorHorizontal, SeparatorVertical } from "../../components/Separator";

import Available from "./Available";
import Received from "./Received";
import Late from "./Late";
import FlowReceivement from "./ FlowReceivement";
import ValuesReceived from "./ValuesReceived";
import Wallet from "./Wallet";

interface Props {}

const Balance: React.FC<Props> = (props) => {
    return (
        <div className="page">
            <div className="container">
                <div className="descmod cadastro">
                    <div className="row">
                        <Available />
                        <SeparatorVertical />
                        <Received />
                        <SeparatorVertical />
                        <Late />
                    </div>

                    <SeparatorHorizontal />
                </div>

                <FlowReceivement />

                <SeparatorHorizontal />

                <ValuesReceived />

                <SeparatorHorizontal />

                <Wallet />
            </div>
        </div>
    );
};

export default Balance;
