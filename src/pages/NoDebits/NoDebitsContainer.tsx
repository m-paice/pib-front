import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions

// selectors
import { amountDebitsPaidOut, debitsPaid } from "../../store/modules/pf/debt/selectors";
import { userActiveNotifications } from "../../store/modules/auth/selectors";

export const noDebitsContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const isDebitsPaid = useSelector(debitsPaid);
        const activeNotifications = useSelector(userActiveNotifications);

        return (
            <Component
                payload={{
                    data: {
                        debitsPaidOut: isDebitsPaid,
                        activeNotifications,
                    },
                    actions: {},
                }}
            />
        );
    };

    return Container;
};
