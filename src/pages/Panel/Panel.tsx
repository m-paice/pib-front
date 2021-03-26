import React, { useEffect } from "react";

import WarningText from "../../components/WarningText";

import NoDebits from "../NoDebits";
import Debits from "../Debits";

import { painelContainer } from "./PainelContainer";

interface Props {
    payload: {
        data: {
            userEnable: boolean;
            typeActiveAccount: string;
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
    const { userEnable, typeActiveAccount, amountDebits } = data;

    useEffect(() => {
        loadDebits();
    }, []);

    if (!userEnable)
        return (
            <WarningText>Usuário não habilitado, verifique seu {typeActiveAccount} para ativar sua conta.</WarningText>
        );

    if (!amountDebits) return <Debits />;

    return <NoDebits />;
};

export default painelContainer(Panel);
