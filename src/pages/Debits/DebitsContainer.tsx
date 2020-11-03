import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions
import { actions as actionsDebts } from "../../store/modules/pf/debt/actions";

// selectors
import { selectDebts, selectDebtsPending, valueTotalDebts, amountDebts } from "../../store/modules/pf/debt/selectors";

export const debtsContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const debts = useSelector(selectDebts);

        const value = useSelector(valueTotalDebts);
        const amount = useSelector(amountDebts);

        const handleLoadDebts = () => {
            dispatch(actionsDebts.loadDebt());
        };

        return (
            <Component
                payload={{
                    data: {
                        debts,
                    },
                    actions: {
                        handleLoadDebts,
                    },
                    amount,
                    value,
                }}
            />
        );
    };

    return Container;
};
