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

        const handleReduceValueOfMonth = () => {
            return transactions.reduce((acc, cur) => {
                const month = new Date(cur.date).getMonth();

                const handleCalculateValue = (operation: number, value: number) => {
                    const valueReceived = operation === 1;

                    if (valueReceived) return (acc[month] || 0) + value;

                    return (acc[month] || 0) - value;
                };

                return {
                    ...acc,
                    [month]: handleCalculateValue(cur.operation, cur.value),
                };
            }, {});
        };

        return (
            <Component
                payload={{
                    data: transactions,
                    totalValueTransactions: totalValueTransactions.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                    }),
                    isValidValue: totalValueTransactions > 25,
                    handleFilterCurrentMonth,
                    handleReduceValueOfMonth,
                }}
            />
        );
    };

    return Container;
};
