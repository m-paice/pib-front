import React from "react";

import { useSelector } from "react-redux";

// selectors
import { selectDebts, selectDebtsPending, valueTotalDebts, amountDebts } from "../../store/modules/pj/debt/selectors";

export const debtsContainer = (Component: React.ReactType) => {
    const Container: React.FC = () => {
        const debts = useSelector(selectDebts);
        const debtsPending = useSelector(selectDebtsPending);

        const value = useSelector(valueTotalDebts);
        const amount = useSelector(amountDebts);

        return (
            <Component
                payload={{
                    data: {
                        debts,
                        debtsPending,
                    },
                    amount,
                    value,
                }}
            />
        );
    };

    return Container;
};
