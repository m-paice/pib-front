import React, { useEffect } from "react";

import NoDebits from "../NoDebits";
import Debits from "../Debits";

import { painelContainer } from "./PainelContainer";

interface Props {
    payload: {
        data: {
            amountDebits: number;
        };
        actions: {
            loadDebits(): void;
        };
    };
}

const Panel: React.FC<Props> = ({ payload }) => {
    const { data, actions } = payload;
    const { loadDebits } = actions;
    const { amountDebits } = data;

    useEffect(() => {
        loadDebits();
    }, []);

    if (!amountDebits) return <Debits />;

    return <NoDebits />;
};

export default painelContainer(Panel);
