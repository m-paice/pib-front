import React from "react";

import NoDebits from "../NoDebits";
import Debits from "../Debits";

import { painelContainer } from "./PainelContainer";

interface Props {
    payload: {
        data: {
            amountDebits: number;
        };
        actions: object;
    };
}

const Panel: React.FC<Props> = ({ payload }) => {
    const { data, actions } = payload;
    const { amountDebits } = data;

    if (amountDebits <= 0) return <NoDebits />;

    return <Debits />;
};

export default painelContainer(Panel);
