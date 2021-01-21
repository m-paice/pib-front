import React from "react";

import { useSelector } from "react-redux";

// selectors
import { dataWallet, totalValue } from "../../store/modules/pj/wallet/selectors";
import { userAuthenticated, userEnabled } from "../../store/modules/auth/selectors";

export const financialReportContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const transactions = useSelector(dataWallet);
        const totalValueTransactions = useSelector(totalValue);
        const userAuthenticate = useSelector(userAuthenticated);
        const userEnable = useSelector(userEnabled);

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
                    data: {
                        transactions,
                        userEnable,
                        totalValueTransactions: totalValueTransactions.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                        }),
                        isValidValue: totalValueTransactions > 25,
                        userAuthenticate,
                    },
                    actions: {
                        handleFilterCurrentMonth,
                        handleReduceValueOfMonth,
                    },
                }}
            />
        );
    };

    return Container;
};
