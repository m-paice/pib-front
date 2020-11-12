import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions

// selectors
import { amountDebitsPaidOut, debitsPaid } from "../../store/modules/pf/debt/selectors";

export const noDebitsContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const isDebitsPaid = useSelector(debitsPaid);

        return (
            <Component
                payload={{
                    data: {
                        debitsPaidOut: isDebitsPaid,
                    },
                    actions: {},
                }}
            />
        );
    };

    return Container;
};
