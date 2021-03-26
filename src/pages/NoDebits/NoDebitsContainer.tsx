import React from "react";

import { useSelector, useDispatch } from "react-redux";

// actions

// selectors
import { amountDebitsPaidOut, debitsPaid } from "../../store/modules/pf/debt/selectors";
import { userActiveNotifications, userTypeActiveAccountContrary } from "../../store/modules/auth/selectors";

// context
import { useUser } from "../../context/usuario";

export const noDebitsContainer = (Component: React.ElementType) => {
    const Container: React.FC = () => {
        const dispatch = useDispatch();

        const { handleActiveNotification } = useUser();

        const isDebitsPaid = useSelector(debitsPaid);
        const activeNotifications = useSelector(userActiveNotifications);
        const typeActiveAccountContrary = useSelector(userTypeActiveAccountContrary);

        return (
            <Component
                payload={{
                    data: {
                        debitsPaidOut: isDebitsPaid,
                        activeNotifications,
                        typeActiveAccountContrary,
                    },
                    actions: {
                        handleActiveNotification,
                    },
                }}
            />
        );
    };

    return Container;
};
