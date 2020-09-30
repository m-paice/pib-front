import React from "react";

import { useSelector } from "react-redux";

import { dataWallet, totalValue } from "../../store/modules/pj/wallet/selectors";

export const financialReportContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const transactions = useSelector(dataWallet);
        const totalValueTransactions = useSelector(totalValue);

        return (
            <Component
                payload={{
                    data: transactions,
                    totalValueTransactions,
                }}
            />
        );
    };

    return Container;
};
