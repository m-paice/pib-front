import React from "react";

import { useSelector } from "react-redux";

// selectors
import { valueTotalDebts, amountDebts } from "../../store/modules/pj/debt/selectors";

export const debtsContainer = (Component: React.ReactType) => {
    const Container: React.FC = () => {
        const value = useSelector(valueTotalDebts);
        const amount = useSelector(amountDebts);

        return (
            <Component
                data={{
                    amount,
                    value,
                }}
            />
        );
    };

    return Container;
};
