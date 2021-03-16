import React, { useEffect } from "react";

import UnableUser from "../../components/UnableUser";

import NoDebits from "../NoDebits";
import Debits from "../Debits";

import { painelContainer } from "./PainelContainer";

interface Props {
    payload: {
        data: {
            userEnable: boolean;
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
    const { userEnable, amountDebits } = data;

    useEffect(() => {
        loadDebits();
    }, []);

    if (!userEnable)
        return (
            <div className="page">
                <UnableUser type="consumidor" />
            </div>
        );

    if (!amountDebits) return <Debits />;

    return <NoDebits />;
};

export default painelContainer(Panel);
