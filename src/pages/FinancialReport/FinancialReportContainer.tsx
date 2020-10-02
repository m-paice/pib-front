import React from "react";

import { useSelector } from "react-redux";

import { dataWallet, totalValue } from "../../store/modules/pj/wallet/selectors";

export const financialReportContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const transactions = useSelector(dataWallet);
        const totalValueTransactions = useSelector(totalValue);

        const handleFilterCurrentMonth = (month: number) => {
            return transactions.filter((transaction) => new Date(transaction.date).getMonth() === month);
        };

        return (
            <Component
                payload={{
                    data: transactions,
                    totalValueTransactions: totalValueTransactions.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    }),
                    handleFilterCurrentMonth,
                }}
            />
        );
    };

    return Container;
};
